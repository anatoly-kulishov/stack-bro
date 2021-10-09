import React from 'react';
import {GlobalStoreFolders, openIdentityAuthModalGAC} from "../../../globalStoreUtils";
import {GlobalStore} from "redux-micro-frontend";
import {Button} from "@wavea/ui-kit";

const IdentityAuth = () => {

    const globalStore = GlobalStore.Get();

    const handleIdentityAuthOpen = () => {
        globalStore.DispatchGlobalAction(GlobalStoreFolders.IdentityAuth, openIdentityAuthModalGAC())
    }

    return (
        <>
            <div className="mb-2 pb-1">
                <h1 style={{marginBottom: '20px'}}>Welcome to the Study!</h1>
                <p>Thank you for completing the previous steps. Please proceed with the Identity
                    Authentication process.</p>
            </div>
            <>
                <Button onClick={handleIdentityAuthOpen} label="Identity Authentication"
                        typeButton="primary" isLarge/>
            </>
            <identity-auth/>
        </>
    );
};

export default IdentityAuth;
