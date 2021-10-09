import React, {FC} from 'react';
import {Button} from "@wavea/ui-kit";
import {GlobalStore} from "redux-micro-frontend";
import {GlobalStoreFolders, openAccountSetupModalGAC} from "../../../globalStoreUtils";

const AccountSetup:FC = () => {

    //Add global store action
    const globalStore = GlobalStore.Get();
    const handleAccountSetupOpen = () => {
        globalStore.DispatchGlobalAction(GlobalStoreFolders.AccountSetup, openAccountSetupModalGAC())
    }

    return (
        <>
            <h1 style={{marginBottom: '20px'}}>Welcome to the Study!</h1>
            <p>Please complete setting up your account by answering a few questions about yourself.
                Click the Account Setup button to begin.</p>
            <Button onClick={handleAccountSetupOpen} label="Account Set Up" typeButton="primary" isLarge/>
            <account-setup></account-setup>
        </>
    );
};

export default AccountSetup;
