import React from 'react';
import './Spinner.scss';

const Spinner = () => {
    return (
        <div className="spinner-box">
            <div className="lds-css">
                <div className="lds-double-ring">
                    <div/>
                    <div/>
                </div>
            </div>
        </div>
    );
};

export default Spinner;
