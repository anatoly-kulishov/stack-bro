import React from "react";
import AskQuestion from "../AskQuestion/AskQuestion";
import InformedConsent from "../Steps/InformedConsent/InformedConsent";
import Screening from "../Steps/Screening/Screening";
import AccountSetup from "../Steps/AccountSetup/AccountSetup";
import IdentityAuth from "../Steps/IdentityAuth/IdentityAuth";
import SchedulingPreferences from "../Steps/SchedulingPreferences/SchedulingPreferences";
import StudyDatesApproval from "../Steps/StudyDatesApproval/StudyDatesApproval";
import DeviceArrival from "../Steps/DeviceArrival/DeviceArrival";
import SettingUp from "../Steps/SettingUp/SettingUp";
import ParticipatingStudy from "../Steps/ParticipatingStudy/ParticipatingStudy";
import EndOfStudy from "../Steps/EndOfStudy/EndOfStudy";
import { useTypedSelector } from "../../state";
import { UserStepEnum } from "../../state/types";
import StepProgress from "../StepProgress/StepProgress";
import WaitingScreening from "../Steps/WaitingScreening/WaitingScreening";

const StepsWrapper = () => {
  const currentUser = useTypedSelector((state) => state.user);

  const steps = () => {
    switch (currentUser?.step) {
      case UserStepEnum.INFORMED_CONSENT:
        return <InformedConsent />;
      case UserStepEnum.SCREENING:
        return <Screening />;
      case UserStepEnum.SCREENING_WAIT_CONFIRM:
        return <WaitingScreening />;
      case UserStepEnum.ACCOUNT_SETUP:
        return <AccountSetup />;
      case UserStepEnum.IDENTITY_AUTHENTICATION:
        return <IdentityAuth />;
      case UserStepEnum.SCHEDULING_PREFERENCES:
        return <SchedulingPreferences />;
      case UserStepEnum.STUDY_DATES_APPROVAL:
        return <StudyDatesApproval />;
      case UserStepEnum.DEVICE_ARRIVAL:
        return <DeviceArrival />;
      case UserStepEnum.SETTING_UP:
        return <SettingUp />;
      case UserStepEnum.PARTICIPATING_IN_THE_STUDY:
        return <ParticipatingStudy />;
      case UserStepEnum.END_OF_STUDY_SURVEY:
        return <EndOfStudy />;
      default:
        return null;
    }
  };

  return (
    currentUser && (
      <div className="mfe-content">
        <div className="container">
          <div className="row">
            <div className="col-3">
              <StepProgress currentStep={currentUser.step} />
            </div>
            <div className="col-6">
              <div className="main-part">{steps()}</div>
            </div>
            <div className="col-3">
              <AskQuestion />
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default StepsWrapper;
