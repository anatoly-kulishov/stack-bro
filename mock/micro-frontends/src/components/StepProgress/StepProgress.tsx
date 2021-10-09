import React, { PropsWithChildren } from "react";
import { UserStepEnum } from "../../state/types";
import classNames from "classnames";
import "./StepProgress.scss";

interface IStepProgressProps {
  currentStep: string;
}

type renderStepTypes = JSX.Element[] | Element[];

interface StepTypes {
  value: string;
  label?: string;
  completed?: boolean;
  inProgress?: boolean;
  waiting?: boolean;
}

const checkingEligibility: StepTypes[] = [
  {
    value: UserStepEnum.INFORMED_CONSENT,
    label: "Informed Consent",
    completed: false,
    inProgress: false,
  },
  {
    value: UserStepEnum.SCREENING,
    label: "Screening",
    completed: false,
    inProgress: false,
  },
  { value: UserStepEnum.SCREENING_WAIT_CONFIRM, waiting: true },
];

const studyProgress: StepTypes[] = [
  {
    value: UserStepEnum.ACCOUNT_SETUP,
    label: "Account Setup",
    completed: false,
    inProgress: false,
  },
  {
    value: UserStepEnum.IDENTITY_AUTHENTICATION,
    label: "Identity Authentication",
    completed: false,
    inProgress: false,
  },
  {
    value: UserStepEnum.SCHEDULING_PREFERENCES,
    label: "Scheduling Preferences",
    completed: false,
    inProgress: false,
  },
  {
    value: UserStepEnum.STUDY_DATES_APPROVAL,
    label: "Study Dates Approval ",
    completed: false,
    inProgress: false,
  },
  {
    value: UserStepEnum.DEVICE_ARRIVAL,
    label: "Device Arrival",
    completed: false,
    inProgress: false,
  },
  {
    value: UserStepEnum.SETTING_UP,
    label: "Setting Up",
    completed: false,
    inProgress: false,
  },
  {
    value: UserStepEnum.PARTICIPATING_IN_THE_STUDY,
    label: "Participating in the Study",
    completed: false,
    inProgress: false,
  },
  {
    value: UserStepEnum.END_OF_STUDY_SURVEY,
    label: "End of Study Survey",
    completed: false,
    inProgress: false,
  },
];

const StepProgress: React.FC<IStepProgressProps> = (props) => {
  const { currentStep }: PropsWithChildren<IStepProgressProps> = props;

  const currentArray: boolean = checkingEligibility.some(
    (arrStep) => arrStep.value === currentStep
  );

  const currentSteps: StepTypes[] = currentArray
    ? checkingEligibility
    : studyProgress;

  const renderStep = (): renderStepTypes => {
    let foundCurrent: boolean = false;

    return currentSteps.map((step) => {
      const activeCurrent: boolean = step.value === currentStep;

      if (activeCurrent) {
        foundCurrent = true;
      }
      return (
        <div
          className={classNames("StepItem", {
            completed: !foundCurrent,
            active: activeCurrent,
            waiting: step.waiting,
          })}
        >
          {step.label}
        </div>
      );
    });
  };

  return (
    <div className="StepProgress">
      <h4>{currentArray ? "Check Eligibility" : "Study Progress"}</h4>
      <div className="StepsList">{renderStep()}</div>
    </div>
  );
};
export default StepProgress;
