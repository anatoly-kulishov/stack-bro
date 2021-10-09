import React, {useEffect} from 'react'
import moment from 'moment';

const SESSION_TIMEOUT_MINUTES = 15;

function SessionTimeoutCheckerHook() {

    const handleSessionTimeout = () => {
        const lastTokenAccessedTime = localStorage.getItem("lastTokenAccessedTime")
        if (lastTokenAccessedTime) {
            const time = moment(lastTokenAccessedTime).toDate().getTime();
            const time30minsAgo = moment().subtract(SESSION_TIMEOUT_MINUTES, 'minutes').toDate().getTime();
            if (time < time30minsAgo) {
                logout();
            }
        }
    }

    const logout = async () => {
        try {
            // await Auth.signOut().catch(e => { })
            localStorage.clear();
            sessionStorage.clear();
            window.location.href = "/"
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => handleSessionTimeout(), [])

    return null;
}

export default SessionTimeoutCheckerHook;
