import React, {FC} from 'react';
import {Button} from "@wavea/ui-kit";

const EndOfStudy:FC = () => {
    return (
        <>
            <h2 style={{marginBottom: '20px', lineHeight: '64px'}}>Thank you for your participation in the Wearable Sleep
                Study!
            </h2>
            <p style={{marginBottom: '34px'}}>
                Please complete the End of Study Survey to give feedback on your experience in the
                study.
            </p>
            <Button label="Give Feedback" typeButton="primary" isLarge/>
        </>
    );
};

export default EndOfStudy;
