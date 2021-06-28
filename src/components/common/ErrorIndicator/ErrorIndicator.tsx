import React from 'react';
import icon from '../../assets/images/error-icon.svg';
import './ErrorIndicator.module.scss';

const ErrorIndicator = () => {
    return (
        <div className="error-indicator">
            <img src={icon} alt="error icon"/>
            <span className="boom">BOOM!</span>
            <span>something has gone terribly wrong</span>
            <span>(but we already sent droids to fix it)</span>
        </div>
    );
};

export default ErrorIndicator;
