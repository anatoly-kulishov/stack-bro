import React, {FC} from 'react';
import {Button} from "@wavea/ui-kit";
import {GlobalStore} from "redux-micro-frontends";
import {GlobalStoreFolders, openInformedConsentModalAC} from "../../../globalStoreUtils";
import './InformedConsent.scss';

const InformedConsent: FC = () => {

    const handleInformedConsentOpen = () => {
        const globalStore = GlobalStore.Get();
        globalStore.DispatchGlobalAction(GlobalStoreFolders.InformedConsent, openInformedConsentModalAC())
    }

    return (
        <div className="informedConsent">
            <h2 className="mb-sm">Informed Consent</h2>
            <div className="main-text">Thank you for confirming your e-mail address.Your next steps
                are to read the ICF, ask
                questions or let us know that you do not have any, and then sign the ICF, followed
                by completing the assessment to determine if you are abe to participate in this
                study.
            </div>
            <div className="button-wrap mt-4">
                <Button type="button" typeButton="primary" isLarge={true}
                        label="Read informed consent" onClick={handleInformedConsentOpen}/>
            </div>

            <informed-consent></informed-consent>
        </div>
    );
};

export default InformedConsent;