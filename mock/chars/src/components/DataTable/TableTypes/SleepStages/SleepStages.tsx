import React, {FC, memo, useMemo} from "react";
import "./SleepStages.scss";
import arrowDownIcon from "../../../../assets/icons/arrow-down-black-icon.svg";
import {calculateDevicesDataSummury, calculateDiffTime,} from "../../../../utils/charts-data-help";
import {SleepStagesTableType} from "../../../../types";
import {useTypedSelector} from "../../../../state";
import {FilterState} from "../../../../state/reducers/filterReducer";
import {getFilterOptions} from "../../../../state/selectors/app-selectors";

type SleepStagesPropsType = {
  data: SleepStagesTableType
}

const SleepStages: FC<SleepStagesPropsType> = ({data}) => {
  const {devices} = useTypedSelector<FilterState>(getFilterOptions);

  const fitbitSummury = useMemo(() => calculateDevicesDataSummury(Object.values(data.fitbit)), [data]);
  const withingsSummury = useMemo(() => calculateDevicesDataSummury(Object.values(data.withings)), [data]);

  const formatTime = useMemo(() => (timestamp: Date | number) => {
    if (timestamp) {
      return `${new Date(timestamp).getUTCHours()}H ${new Date(timestamp).getUTCMinutes()}M`
    }
    return '0H 0M'
  }, [])

  return (
    <table className={`table sleep-stages-smoothed ${!devices.fitbit.flag || !devices.withings.flag ? 'filter-on' : ''}`}>
      <thead>
      <tr>
        <td>
          <span className="c-pointer">Exact value
            <img className="popover-arrow" src={arrowDownIcon} alt=""/>
          </span>
        </td>
        {devices.fitbit.flag && (
          <td className="color-green">Fitbit</td>
        )}
        {devices.withings.flag && (
          <td className="color-blue">Withings</td>
        )}
        {(devices.fitbit.flag && devices.withings.flag) && (
          <td className="color-red">Abs. Difference</td>
        )}
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>REM</td>
        {devices.fitbit.flag && (
          <td>{formatTime(data.fitbit.rem)}</td>
        )}
        {devices.withings.flag && (
          <td>{formatTime(data.withings.rem)}</td>
        )}
        {(devices.fitbit.flag && devices.withings.flag) && (
          <td>{calculateDiffTime(data.fitbit.rem, data.withings.rem)}</td>
        )}
      </tr>
      <tr>
        <td>Deep</td>
        {devices.fitbit.flag && (
          <td>{formatTime(data.fitbit.deep)}</td>
        )}
        {devices.withings.flag && (
          <td>{formatTime(data.withings.deep)}</td>
        )}
        {(devices.fitbit.flag && devices.withings.flag) && (
          <td>{calculateDiffTime(data.fitbit.deep, data.withings.deep)}</td>
        )}
      </tr>
      <tr>
        <td>Light</td>
        {devices.fitbit.flag && (
          <td>{formatTime(data.fitbit.light)}</td>
        )}
        {devices.withings.flag && (
          <td>{formatTime(data.withings.light)}</td>
        )}
        {(devices.fitbit.flag && devices.withings.flag) && (
          <td>{calculateDiffTime(data.fitbit.light, data.withings.light)}</td>
        )}
      </tr>
      <tr>
        <td>Awake</td>
        {devices.fitbit.flag && (
          <td>{formatTime(data.fitbit.wake)}</td>
        )}
        {devices.withings.flag && (
          <td>{formatTime(data.withings.wake)}</td>
        )}
        {(devices.fitbit.flag && devices.withings.flag) && (
          <td>{calculateDiffTime(data.fitbit.wake, data.withings.wake)}</td>
        )}
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td>Total</td>
        {devices.fitbit.flag && (
          <td>{`${new Date(fitbitSummury).getUTCHours()}H ${new Date(fitbitSummury).getUTCMinutes()}M`}</td>
        )}
        {devices.withings.flag && (
          <td>{`${new Date(withingsSummury).getUTCHours()}H ${new Date(withingsSummury).getUTCMinutes()}M`}</td>
        )}
        <td/>
      </tr>
      </tfoot>
    </table>
  )
}

export default memo(SleepStages);