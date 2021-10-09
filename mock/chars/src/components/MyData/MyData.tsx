import React, {FC, memo, useState} from "react";
import DailyCharts from "../DailyCharts";
import SleepMetrics from "../Chars/SleepMetrics";
import sleepMetrics from "../../mock/sleep-metrics";
import DataTable from "../DataTable";
import HeartRate from "../Chars/HeartRate";
import SleepStages from "../Chars/SleepStages";
import NoData from "../NoData";
import {useTypedSelector} from "../../state";
import {getFilterOptions} from "../../state/selectors/app-selectors";
import {FilterState} from "../../state/reducers/filterReducer";
import {preparationAllCharsData, parseHeartRate, parseSleepStages} from "../../utils/charts-data-help";
import hr from "../../mock/response_hr_13-15.json";
import sleep from "../../mock/response_sleep_13-15.json";

const MyData: FC = () => {
  const [DailyChartsData] = useState(() => preparationAllCharsData(hr, sleep));
  const {graphs, tables, devices, sleepStages} = useTypedSelector<FilterState>(getFilterOptions);

  return (
    <div className="container-fluid">
      <div className="myData__body">
        <div className="row mt-2">
          {DailyChartsData.days.map((day: string, index: number) => (
            <DailyCharts key={day} day={day} counter={++index}>
              <div className="col-12 col-lg-4 mt-1 border-right-1">
                <div className="daily-chart__inner">
                  {!devices.fitbit.flag && !devices.withings.flag && !devices.sleepDiary.flag && (
                    <NoData label="No data on Sleep Metrics"/>
                  )}
                  {(devices.fitbit.flag || devices.withings.flag || devices.sleepDiary.flag) && graphs && (
                    <SleepMetrics data={sleepMetrics}/>
                  )}
                  {(devices.fitbit.flag || devices.withings.flag || devices.sleepDiary.flag) && tables && (
                    <div className={`table-frame ${!graphs ? 'mt-auto' : ''}`}>
                      <DataTable type="critical-sleep-times" data={[]}/>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 col-lg-4 border-right-1">
                <div className="daily-chart__inner">
                  {!devices.fitbit.flag && !devices.withings.flag && (
                    <NoData label="No data on Heart Rate"/>
                  )}
                  {(devices.fitbit.flag || devices.withings.flag) && graphs && (
                    <HeartRate data={parseHeartRate(DailyChartsData.hr_data?.[day])}/>
                  )}
                  {(devices.fitbit.flag || devices.withings.flag) && tables && (
                    <div className={`table-frame table-frame--small-horizontal-m ${!graphs ? 'mt-auto' : ''}`}>
                      <DataTable type="heart-rate" data={[]}/>
                    </div>
                  )}
                </div>
              </div>
              <div className="col-12 col-lg-4">
                <div className="daily-chart__inner">
                  {!devices.fitbit.flag && !devices.withings.flag && (
                    <NoData label="No data on Sleep Stages"/>
                  )}
                  {(devices.fitbit.flag || devices.withings.flag) && graphs && (
                    <SleepStages
                      data={parseSleepStages(DailyChartsData.sleep_data?.[day]?.[(sleepStages.flag ? 'sleep_raw' : 'sleep_smth')])}
                      type={sleepStages.flag ? 'raw' : 'smth'}/>
                  )}
                  {(devices.fitbit.flag || devices.withings.flag) && tables && (
                    <div className={`table-frame table-frame--small-right-r ${!graphs ? 'mt-auto' : ''}`}>
                      <DataTable type="sleep-stages" data={DailyChartsData.sleep_data?.[day].sleep_table}/>
                    </div>
                  )}
                </div>
              </div>
            </DailyCharts>
          ))}
        </div>
      </div>
    </div>
  )
}

export default memo(MyData);