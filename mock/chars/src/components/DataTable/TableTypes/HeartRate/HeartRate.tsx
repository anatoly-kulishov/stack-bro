import React, {FC, memo} from "react";
import "./HeartRate.scss";
import warningBlueIcon from "../../../../assets/icons/warning-blue-icon.svg";
import MyPopover from "../../../MyPopover/MyPopover";

const HeartRate: FC<any> = () => {
  return (
    <table className='table heart-rate'>
      <thead>
      <tr>
        <td/>
        <td className="pb-0" colSpan={2}>
          <div className="d-flex justify-content-center mb-2">
            <span className="color-black">Sleep Alone</span>
            <MyPopover
              title="Time between final awakening in the morning and start of sleep session in the evening. Excludes any naps taken during the day."
              positions={['right']}
              arrowPosition='left'>
              <img className="warning-icon" src={warningBlueIcon} alt=""/>
            </MyPopover>
          </div>
          <div className="d-flex justify-content-around separate">
            <div className="color-green">Fitbit</div>
            <div className="color-blue">Withings</div>
          </div>
          <div className="thead-time-desc">
            <div>
              12:45 PM <br/>
              - 03:40 PM
            </div>
            <div>
              12:45 PM <br/>
              - 03:45 PM
            </div>
          </div>
        </td>
        <td className="pb-0">
          <div className="d-flex justify-content-center mb-2">
            <span className="color-black">Awake Alone</span>
            <MyPopover
              title="Represents heart rate during main sleep session only. Excludes time awake during the night and naps during the day."
              positions={['right']}
              arrowPosition='left'>
              <img className="warning-icon" src={warningBlueIcon} alt=""/>
            </MyPopover>
          </div>
          <div className="d-flex justify-content-center separate">
            <div className="color-green">Fitbit</div>
          </div>
          <div className="thead-time-desc">
            03:45 PM <br/>
            - 03:55 PM
          </div>
        </td>
        <td className="pb-0">
          <div className="d-flex justify-content-center mb-2">
            <span className="color-black">Total</span>
            <MyPopover
              title="Covers 24 hour period from midnight to midnight of the date in question."
              positions={['right']}
              arrowPosition='left'>
              <img className="warning-icon" src={warningBlueIcon} alt=""/>
            </MyPopover>
          </div>
          <div className="d-flex justify-content-center separate">
            <div className="color-green">Fitbit</div>
          </div>
          <div className="thead-time-desc">
            24H
          </div>
        </td>
      </tr>
      </thead>
      <tbody>
      <tr className="position-absolute d-none">
        <td>Ref. Time</td>
      </tr>
      <tr>
        <td>Min (BPM)</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Max (BPM)</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>Avg (BPM)</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      <tr>
        <td>SD (BPM)</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
        <td>0</td>
      </tr>
      </tbody>
    </table>
  )
}

export default memo(HeartRate);