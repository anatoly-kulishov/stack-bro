import React, {FC, memo} from "react";
import {Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import "./SleepStages.scss";
import Legend from "../../Legend";
import CustomXAxisTick from "../../CustomXAxisTick/CustomXAxisTick";
import {useTypedSelector} from "../../../state";
import {FilterState} from "../../../state/reducers/filterReducer";
import {getFilterOptions} from "../../../state/selectors/app-selectors";

type SleepStagesPropsType = {
  data: any,
  type: 'smth' | 'raw'
}

const SleepStages: FC<SleepStagesPropsType> = ({data, type}) => {
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
    <div className="sleep-stages-chart">
      <Legend data={LEGEND_DATA} margin='0 0 11px'/>
      <ResponsiveContainer width="100%" height={160}>
        <AreaChart
          data={data}
          margin={{top: 10, right: 15, left: 5, bottom: 5}}>
          <CartesianGrid/>
          <XAxis
            type="category"
            dataKey="date"
            interval={(type === 'smth') ? 35 : 359}
            tickSize={0}
            tick={<CustomXAxisTick textWidth={40}/>}/>
          <YAxis
            type="category"
            interval={0}
            tickSize={0}
            dx={-15}
            dy={15}
            tick={TICK_STYLE}/>
          <Tooltip content={<></>}/>
          {devices.fitbit.flag && (
            <Area type="step" dataKey="fitbit" strokeWidth={2} stroke="#50D76E" fill="transparent"/>
          )}
          {devices.withings.flag && (
            <Area type="step" dataKey="withings" strokeWidth={2} stroke="#408DFF" fill="transparent"/>
          )}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}

export default memo(SleepStages);