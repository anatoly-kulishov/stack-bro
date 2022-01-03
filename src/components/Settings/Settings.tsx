import React from 'react';
import {useSelector} from "react-redux";
import Mock from "../common/Mock";
import {getAppTheme} from "../../store/selectors/app-selectors";

const Settings: React.FC = () => {
  const appTheme = useSelector(getAppTheme);

  return (
    <section className={`default-box default-box--${appTheme}`}>
      <Mock/>
    </section>
  )
}

export default Settings;
