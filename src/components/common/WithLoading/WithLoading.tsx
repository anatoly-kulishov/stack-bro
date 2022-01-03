/** Libs **/
import React from "react";

/** Components **/
import Spinner from "../Spinner";

/** Styles & Images **/
import './WithLoading.scss';

interface WithLoadingProps {
  isLoading: boolean;
  spinnerSize: string;
}

const WithLoading: React.FC<WithLoadingProps> = props => {

  return <>
    {props.isLoading ?
      <>
        {props.children}
        <div className="loading-overlay blurred"/>
        <div className="spinner-centered"><Spinner size={props.spinnerSize}/></div>
      </>
      : props.children}
  </>
}

export default WithLoading