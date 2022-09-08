import React, { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import styles from './NoMatch.module.scss';

export const NoMatch: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className={`${styles.noMatch} default-box pb-2`} data-testid="no-match-page">
      <div className={styles.backLink} onClick={() => navigate(-1)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
          <g stroke="#1890ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 11.996h12" />
            <path d="M12 18l-6-6 6-6" />
          </g>
          <defs />
        </svg>
        <span className={styles.backLinkTitle} onClick={() => navigate(-1)}>
          Back
        </span>
      </div>
      <h1 className="mt-3">
        No match for <i />
        <code>{location.pathname}</code>
      </h1>
    </div>
  );
};
