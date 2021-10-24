import React, {FC, memo} from "react";
import './DataTable.scss';
import HeartRateTable from "./TableTypes/HeartRate";
import DefaultTable from "./TableTypes/DefaultTable";
import SleepStages from "./TableTypes/SleepStages";
import CriticalSleepTimes from "./TableTypes/CriticalSleepTimes";
import CoreSleepMetrics from "./TableTypes/CoreSleepMetrics";

type DataTablePropsType = {
  type?: 'default'
    | 'critical-sleep-times'
    | 'core-sleep-metrics'
    | 'heart-rate'
    | 'sleep-stages'
  data: any
}

const DataTable: FC<DataTablePropsType> = ({type, data}) => {
  if (type === 'critical-sleep-times') return <CriticalSleepTimes data={data}/>;
  if (type === 'core-sleep-metrics') return <CoreSleepMetrics data={data}/>;
  if (type === 'heart-rate') return <HeartRateTable data={data}/>;
  if (type === 'sleep-stages') return <SleepStages data={data}/>;
  return <DefaultTable/>
}

export default memo(DataTable);