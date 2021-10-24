import React, {FC, memo} from "react";
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "./HeartRate.scss";
import {HearthRateChartData} from "../../../types";
import Legend from "../../Legend";
import {mathCeil10, mathFloor10} from "../../../utils/charts-data-help";
import CustomYAxisTick from "../../CustomXAxisTick";
import ArrowIcon from "../../../assets/icons/arrow-right-icon.svg";
import {useTypedSelector} from "../../../state";
import {FilterState} from "../../../state/reducers/filterReducer";
import {getFilterOptions} from "../../../state/selectors/app-selectors";

type HeartRatePropsType = {
  data: Array<HearthRateChartData>
}

const HeartRate: FC<HeartRatePropsType> = ({data}) => {
  const {devices} = useTypedSelector<FilterState>(getFilterOptions);
  const TICK_STYLE = {stroke: '#f2f2f2', strokeWidth: 0.3, fontSize: 12};
  const LEGEND_DATA = [{
    id: 1,
    label: 'Fitbit',
    dotColor: '#50D76E',
    color: '#50D76E'
  }, {
    id: 2,
    label: 'Withings',
    dotColor: '#408DFF',
    color: '#408DFF'
  }]

  return (
    <div className="heart-rate-char">
      <Legend data={LEGEND_DATA} margin='0 0 11px'/>
      <div className="arrow arrow-up">
        <img src={ArrowIcon} alt=""/>
        <span className="line"/>
      </div>
      <ResponsiveContainer width="100%" height={160}>
        <LineChart data={data}
                   margin={{top: 10, right: 25, left: 0, bottom: 5}}>
          <CartesianGrid/>
          <XAxis
            dataKey={'date'}
            type="category"
            interval={71} // 63
            tickLine={false}
            tickSize={0}
            tick={<CustomYAxisTick/>}/>
          <YAxis
            type="number"
            interval={(devices.fitbit.flag && devices.withings.flag) ? 0 : 'preserveStart'}
            domain={[
              (dataMin: number) => {
                if (dataMin > 20) return 20;
                return mathFloor10(dataMin)
              },
              (dataMax: number) => mathCeil10(dataMax)
            ]}
            dx={-8}
            allowDuplicatedCategory={false}
            tickSize={0}
            tick={TICK_STYLE}/>
          <Tooltip content={<></>}/>
          {devices.fitbit.flag && (
            <Line dot={false} type="linear" strokeWidth={2} dataKey="fitbit" stroke="#50D76E"/>
          )}
          {devices.withings.flag && (
            <Line dot={false} type="linear" strokeWidth={2} dataKey="withings" stroke="#408DFF"/>
          )}
        </LineChart>
      </ResponsiveContainer>
      <span className="position-absolute category-bpm">BPM</span>
      <div className="arrow arrow-down">
        <img src={ArrowIcon} alt=""/>
        <span className="line"/>
      </div>
    </div>
  )
}

export default memo(HeartRate);