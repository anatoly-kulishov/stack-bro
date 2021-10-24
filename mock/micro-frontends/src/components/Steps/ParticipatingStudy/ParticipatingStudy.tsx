import React, {FC} from 'react';

const ParticipatingStudy:FC = () => {
    return (
        <>
            <h2 className="mb-sm">Welcome Back!</h2>
            <div className="main-text mb-4">
                Use the Messaging/Inbox tab to contact a Subject Concierge if you have any questions or
                need help throughout your 2 weeks of recording. To view the data collected from your
                devices, visit the My Data tab. Once you've completed the trial and sent back your
                device kit, return here to confirm that the package has been sent.
            </div>
            <sent-kit></sent-kit>
        </>
    );
};

export default ParticipatingStudy;
