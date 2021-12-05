import React, {FC, memo} from 'react';
import {useLocation, useHistory} from "react-router-dom";
import styles from "./NoMatch.module.scss";

const NoMatchIcon: JSX.Element = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
    <g stroke="#22C55E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 11.996h12"/>
      <path d="M12 18l-6-6 6-6"/>
    </g>
    <defs/>
  </svg>
)

const NoMatch: FC = () => {
  const location = useLocation();
  const history = useHistory();

  return (
    <div className={`${styles.noMatch} default-box pb-2`}>
      <div className={styles.backLink} onClick={history.goBack}>
        {NoMatchIcon}
        <span className={styles.backLinkTitle} onClick={history.goBack}>Back</span>
      </div>
      <h1 className="mt-3">No match for <i/><code>{location.pathname}</code></h1>
    </div>
  );
}

export default memo(NoMatch);
