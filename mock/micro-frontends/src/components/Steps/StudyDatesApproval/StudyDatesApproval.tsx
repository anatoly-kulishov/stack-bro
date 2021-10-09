import React, { FC, useEffect } from "react";
import { GlobalStore } from "redux-micro-frontend";
import { UserStepEnum } from "../../../state/types";
import { GlobalStoreFolders, setStepGAC } from "../../../globalStoreUtils";

const StudyDatesApproval: FC = () => {
  const globalStore = GlobalStore.Get();

  useEffect(() => {
    setTimeout(() => {
      globalStore.DispatchGlobalAction(
        GlobalStoreFolders.EnrollmentPortal,
        setStepGAC(UserStepEnum.DEVICE_ARRIVAL)
      );
    }, 5000);
  }, [globalStore]);

  return (
    <>
      <h1 style={{ marginBottom: "20px" }}>Thank You!</h1>
      <p>
        Thanks for selecting your study date preferences. We will be in touch
        within 48 hours to let you know if these dates have been approved. In
        the meantime, you can get more familiar with the study by visiting the{" "}
        <span style={{ color: "#4542D2", fontWeight: "bold" }}>Resources</span>{" "}
        tab.
      </p>
    </>
  );
};

export default StudyDatesApproval;
