/** Libs **/
import React from 'react';

/** Components **/
import {SpinnerIcon} from "../IconsComponent";

/** Styles & Images **/
import "./Spinner.scss";

type SpinnerPropsType = {
  size: string
}

const Spinner: React.FC<SpinnerPropsType> = ({size}) => {
  return (
    <div className="custom-spinner-wrapper">
      <SpinnerIcon size={size}/>
    </div>
  )
}

export default Spinner;

