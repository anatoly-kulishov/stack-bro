import React, {FC, memo} from "react";
import {format} from 'date-fns'
import './DailyChart.scss';

type ChartsPropsType = {
  counter: number,
  day: string,
  children: React.ReactNode,
}

const DailyHarts: FC<ChartsPropsType> = props => {
  const {counter, children, day} = props;
  const currentDate = format(new Date(day), 'MMM dd, y');

  return (
    <div>
      <div className="daily-chart__widget">
        <div className="daily-chart__head">
          <h4>Day {counter} <span className="daily-chart__date">{currentDate}</span></h4>
        </div>
        <div className="widget__body">
          <div className="row">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default memo(DailyHarts);