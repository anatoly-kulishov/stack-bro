import React, {FC} from 'react';
import {Button} from "@wavea/ui-kit";
import {GlobalStore} from "redux-micro-frontend";
import {GlobalStoreFolders, openSchedulingPreferencesModalGAC} from "../../../globalStoreUtils";

const SchedulingPreferences:FC = () => {

    const globalStore = GlobalStore.Get();

    const handleSchedullingPreferencesOpen = () => {
        globalStore.DispatchGlobalAction(GlobalStoreFolders.SchedulingPreferences, openSchedulingPreferencesModalGAC())
    }

    return (
        <>
            <h1 style={{marginBottom: '20px'}}>Welcome to the Study!</h1>
            <p>Please complete setting up your account by answering a few questions about yourself.
                Click the Account Setup button to begin.</p>
            <Button onClick={handleSchedullingPreferencesOpen} label="scheduling preferences" typeButton="primary" isLarge/>
            <scheduling-preferences></scheduling-preferences>
        </>
    );
};

export default SchedulingPreferences;
