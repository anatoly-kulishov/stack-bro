import React from 'react';
import {useLocation, useHistory} from "react-router-dom";
import styles from "./NoMatch.module.scss";

const NoMatch = () => {
    const location = useLocation();
    const history = useHistory();

    return (
        <div className={styles.noMatch}>
            <div className={styles.backLink} onClick={history.goBack}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                    <g stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M6 11.996h12"/>
                        <path d="M12 18l-6-6 6-6"/>
                    </g>
                    <defs/>
                </svg>
                <span className={styles.backLinkTitle} onClick={history.goBack}>Back</span>
            </div>
            <h1>No match for <i/><code>{location.pathname}</code></h1>
        </div>
    );
}

export default NoMatch;
