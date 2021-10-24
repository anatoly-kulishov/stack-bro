import React from 'react';
import warningIcon from "../../../assets/icons/warning-circle-icon.svg";
import {Button} from "@wavea/ui-kit";
import {GlobalStoreFolders, openScreeningModalGAC} from "../../../globalStoreUtils";
import {GlobalStore} from "redux-micro-frontends";
import './Screening.scss'

const Screening = () => {

    const handleScreeningOpen = () => {

        //Add Global Store Action
        const globalStore = GlobalStore.Get();
        globalStore.DispatchGlobalAction(GlobalStoreFolders.Screening, openScreeningModalGAC())
    }

    return (
        <div className="Screening">
            <h2 className="mb-sm">Screening</h2>
            <div className="main-text">
                Thank you for signing the informed consent. <br />
                Your last step before taking part in the study is screening.
            </div>
            <div className="warning-info">
                <img src={warningIcon} alt="warning"/>
                <div className="info-text">Screening should be completed in 5 Days</div>
            </div>
            <div className="button-wrap mt-4">
                <Button onClick={handleScreeningOpen} label="Proceed to screening" typeButton="primary" isLarge/>
                <screening-modal/>
            </div>
        </div>
    );
};

export default Screening;
