import React, {FC, memo} from "react";

const CoreSleepMetrics: FC<any> = () => {
  return (
    <table className='table core-sleep-metrics'>
      <thead>
      <tr>
        <td/>
        <td className="color-green">Fitbit</td>
        <td className="color-blue">Withings</td>
        <td className="color-yellow">Sleep Diary</td>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>Entering bed</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
      </tr>
      <tr>
        <td>Intends to sleep</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
      </tr>
      <tr>
        <td>Sleep onset</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
      </tr>
      <tr>
        <td>Final awakening</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
      </tr>
      <tr>
        <td>Final bed exit</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
        <td>00:00 PM</td>
      </tr>
      </tbody>
    </table>
  )
}

export default memo(CoreSleepMetrics);