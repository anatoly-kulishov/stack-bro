import React, { FC, useEffect } from "react";
import { UserStepEnum } from "../../../state/types";
import { useActions } from "../../../state";
import "./WaitingScreening.scss";

const WaitingScreening: FC = () => {
  const { setStepAC } = useActions();

  useEffect(() => {
    setTimeout(() => {
      setStepAC(UserStepEnum.ACCOUNT_SETUP);
    }, 6000);
  }, []);

  return (
    <div className="WaintingScreening">
      <h1 className="WaintingScreeningTitle">Done!</h1>
      <p>
        Thank you for completing the screening questionnaire. We will reach out
        to you shortly regarding your participation in this trial.
      </p>
      <span className="WaintingScreeningHours">
        You will receive an answer within 24 hrs by email.
      </span>
    </div>
  );
};

export default WaitingScreening;
