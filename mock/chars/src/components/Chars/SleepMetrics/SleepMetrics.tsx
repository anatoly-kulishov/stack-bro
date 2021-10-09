import React, {FC, memo, useEffect, useState} from "react";
import {ResponsiveBar, BarDatum, BarSvgProps} from "@nivo/bar";
import Legend from "../../Legend";
import "./SleepMetrics.scss";
import {useTypedSelector} from "../../../state";
import {FilterState} from "../../../state/reducers/filterReducer";
import {getFilterOptions} from "../../../state/selectors/app-selectors";

enum SleepTimesTypesEnum {
  OUT_OF_BED = "OUT_OF_BED",
  IN_BED_ACTIVE = "IN_BED_ACTIVE",
  TRYING_TO_SLEEP = "TRYING_TO_SLEEP",
  SLEEPING = "SLEEPING",
  WASO = "WASO",
}

const mapColorsById = {
  [SleepTimesTypesEnum.OUT_OF_BED]: "#F2F2F2",
  [SleepTimesTypesEnum.IN_BED_ACTIVE]: "#4542D2",
  [SleepTimesTypesEnum.TRYING_TO_SLEEP]: "#FF50B9",
  [SleepTimesTypesEnum.SLEEPING]: "#A5DFFF",
  [SleepTimesTypesEnum.WASO]: "#A5DFFF",
};

const chartData: BarDatum[] = [
  {
    id: "Fitbit",
    [`${SleepTimesTypesEnum.OUT_OF_BED}-1`]: 34,
    [`${SleepTimesTypesEnum.IN_BED_ACTIVE}-1`]: 12,
    [`${SleepTimesTypesEnum.TRYING_TO_SLEEP}-1`]: 6,
    [`${SleepTimesTypesEnum.SLEEPING}-1`]: 34,
    [`${SleepTimesTypesEnum.IN_BED_ACTIVE}-2`]: 7,
    [`${SleepTimesTypesEnum.OUT_OF_BED}-2`]: 7,
  },
  {
    id: "Withings",
    [`${SleepTimesTypesEnum.OUT_OF_BED}-1`]: 2,
    [`${SleepTimesTypesEnum.IN_BED_ACTIVE}-1`]: 2,
    [`${SleepTimesTypesEnum.TRYING_TO_SLEEP}-1`]: 1,
    [`${SleepTimesTypesEnum.SLEEPING}-1`]: 3,
    [`${SleepTimesTypesEnum.IN_BED_ACTIVE}-2`]: 1,
    [`${SleepTimesTypesEnum.OUT_OF_BED}-2`]: 24,
    [`${SleepTimesTypesEnum.IN_BED_ACTIVE}-3`]: 13,
    [`${SleepTimesTypesEnum.TRYING_TO_SLEEP}-2`]: 7,
    [`${SleepTimesTypesEnum.SLEEPING}-2`]: 33,
    [`${SleepTimesTypesEnum.IN_BED_ACTIVE}-4`]: 7,
    [`${SleepTimesTypesEnum.OUT_OF_BED}-3`]: 7,
  },
  {
    id: "Sleep Diary",
    [`${SleepTimesTypesEnum.OUT_OF_BED}-1`]: 35,
    [`${SleepTimesTypesEnum.IN_BED_ACTIVE}-1`]: 11,
    [`${SleepTimesTypesEnum.TRYING_TO_SLEEP}-1`]: 5,
    [`${SleepTimesTypesEnum.SLEEPING}-1`]: 35,
    [`${SleepTimesTypesEnum.IN_BED_ACTIVE}-2`]: 7,
    [`${SleepTimesTypesEnum.OUT_OF_BED}-2`]: 7,
  },
];

const getColor = (prop: any) => {
  const key: SleepTimesTypesEnum = prop.id.split("-")[0];
  return mapColorsById[key];
};

const CustomTick = (tick: { value: string, x: number, y: number }) => {
  let color = "";
  if (tick.value === "Fitbit") {
    color = "#50D76E";
  }
  if (tick.value === "Withings") {
    color = "#408DFF";
  }
  if (tick.value === "Sleep Diary") {
    color = "#FFAD31";
  }
  return (
    <text transform={`translate(${tick.x - 75},${tick.y + 5})`}>
      <tspan
        style={{
          fill: color,
          fontWeight: 600,
          fontSize: "12px",
          lineHeight: "14px",
          letterSpacing: "-0.02em",
        }}>
        {tick.value}
      </tspan>
    </text>
  );
};

const barBasicProps: Omit<BarSvgProps<any>, "data" | "height" | "width"> = {
  indexBy: "id",
  colorBy: "id",
  colors: getColor,
  margin: {top: 0, right: 0, bottom: 0, left: 75},
  layout: "horizontal",
  isInteractive: false,
  enableLabel: false,
  enableGridY: false,
  minValue: 0,
  maxValue: 100,
  axisLeft: {
    renderTick: CustomTick,
  },
  axisBottom: null,
  axisTop: null,
  axisRight: null,
  padding: 0,
  defs: [
    {
      id: "lines",
      type: "patternLines",
      background: "inherit",
      color: "#C0BEFF",
      rotation: -58,
      lineWidth: 8,
      spacing: 16,
    },
  ],
};

type HeartRateCharPropsType = {
  data: any;
};

const SleepMetrics: FC<HeartRateCharPropsType> = memo(() => {
  const {devices, sleepMetrics} = useTypedSelector<FilterState>(getFilterOptions);

  const LEGEND_DATA = [
    {
      id: 1,
      label: "Out of Bed",
      dotColor: "#F2F2F2",
    },
    {
      id: 2,
      label: "In Bed & Active",
      dotColor: "#4542D2",
    },
    {
      id: 3,
      label: "Trying to  Sleep",
      dotColor: "#FF50B9",
    },
    {
      id: 4,
      label: "Sleeping / Intermittently Awake",
      dotColor: "#C0BEFF",
      secondDotColor: '#A5DEFF'
    },
  ];

  const [legendData, setLegendData] = useState(LEGEND_DATA);

  useEffect(() => {
    if (sleepMetrics.flag) {
      setLegendData(prev => [
        ...prev,
        {
          id: 5,
          label: "WASO",
          dotColor: "#A5DEFF",
        }
      ])
    } else {
      setLegendData(() => LEGEND_DATA)
    }
    // eslint-disable-next-line
  }, [sleepMetrics.flag])

  return (
    <div className="sleep-metrics-char">
      <div className="part-of-day-axes">
        <span>Noon</span>
        <span>6 PM</span>
        <span>Midnight</span>
        <span>6 AM</span>
        <span>Noon</span>
      </div>
      <div className="ChartBlock">
        <div className="ChartItems">

          {devices.fitbit.flag && (
            <div className="ChartItem">
              <ResponsiveBar
                {...barBasicProps}
                data={[chartData[0]]}
                keys={[
                  `${SleepTimesTypesEnum.OUT_OF_BED}-1`,
                  `${SleepTimesTypesEnum.IN_BED_ACTIVE}-1`,
                  `${SleepTimesTypesEnum.TRYING_TO_SLEEP}-1`,
                  `${SleepTimesTypesEnum.SLEEPING}-1`,
                  `${SleepTimesTypesEnum.IN_BED_ACTIVE}-2`,
                  `${SleepTimesTypesEnum.OUT_OF_BED}-2`,
                ]}
                fill={[
                  {
                    match: {
                      id: `${SleepTimesTypesEnum.SLEEPING}-1`,
                    },
                    id: "lines",
                  },
                ]}
              />
            </div>
          )}

          {devices.withings.flag && (
            <div className="ChartItem">
              <ResponsiveBar
                {...barBasicProps}
                data={[chartData[1]]}
                keys={[
                  `${SleepTimesTypesEnum.OUT_OF_BED}-1`,
                  `${SleepTimesTypesEnum.IN_BED_ACTIVE}-1`,
                  `${SleepTimesTypesEnum.TRYING_TO_SLEEP}-1`,
                  `${SleepTimesTypesEnum.SLEEPING}-1`,
                  `${SleepTimesTypesEnum.IN_BED_ACTIVE}-2`,
                  `${SleepTimesTypesEnum.OUT_OF_BED}-2`,
                  `${SleepTimesTypesEnum.IN_BED_ACTIVE}-3`,
                  `${SleepTimesTypesEnum.TRYING_TO_SLEEP}-2`,
                  `${SleepTimesTypesEnum.SLEEPING}-2`,
                  `${SleepTimesTypesEnum.IN_BED_ACTIVE}-4`,
                  `${SleepTimesTypesEnum.OUT_OF_BED}-3`,
                ]}
                fill={[
                  {
                    match: {
                      id: `${SleepTimesTypesEnum.SLEEPING}-1`,
                    },
                    id: "lines",
                  },
                  {
                    match: {
                      id: `${SleepTimesTypesEnum.SLEEPING}-2`,
                    },
                    id: "lines",
                  },
                ]}
              />
            </div>
          )}

          {devices.sleepDiary.flag && (
            <div className="ChartItem">
              <ResponsiveBar
                {...barBasicProps}
                data={[chartData[2]]}
                keys={[
                  `${SleepTimesTypesEnum.OUT_OF_BED}-1`,
                  `${SleepTimesTypesEnum.IN_BED_ACTIVE}-1`,
                  `${SleepTimesTypesEnum.TRYING_TO_SLEEP}-1`,
                  `${SleepTimesTypesEnum.SLEEPING}-1`,
                  `${SleepTimesTypesEnum.IN_BED_ACTIVE}-2`,
                  `${SleepTimesTypesEnum.OUT_OF_BED}-2`,
                ]}
                fill={[
                  {
                    match: {
                      id: `${SleepTimesTypesEnum.SLEEPING}-1`,
                    },
                    id: "lines",
                  },
                ]}
              />
            </div>
          )}

        </div>

        <div className="ChartVerticalLines">
          <span/>
          <span/>
          <span/>
          <span/>
          <span/>
        </div>
      </div>

      <Legend data={legendData} margin="16px 0 0"/>
    </div>
  );
});

export default SleepMetrics;
