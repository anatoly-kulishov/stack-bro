import React, {memo} from 'react';
import {useSelector} from "react-redux";
// import styles from './Sandbox.module.scss';
import Mock from "../common/Mock";
import {getAppTheme} from "../../store/selectors/app-selectors";

const Sandbox: React.FC = () => {
  const appTheme = useSelector(getAppTheme);

  return (
    <section className={`default-box default-box--${appTheme}`}>
      <Mock/>
    </section>
  );
}

export default memo(Sandbox);
