import React from "react";
import './WithLoading.scss';
import Spinner from "../Spinner/Spinner";

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