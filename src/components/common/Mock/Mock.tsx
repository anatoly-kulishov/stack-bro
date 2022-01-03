/** Libs **/
import React, {CSSProperties, FC, memo} from 'react';
import {useSelector} from "react-redux";
import {RocketTwoTone} from '@ant-design/icons';

/** Utils **/
import {getAppTheme} from "../../../store/selectors/app-selectors";
import {isDarkTheme} from "../../../utils/boolean-helpers";

/** Styles & Images **/
import styles from './Mock.module.scss';

const TITLE_FONT_SIZE: CSSProperties = {fontSize: '40px'};

const Mock: FC = () => {
  const appTheme = useSelector(getAppTheme);

  return (
    <div className={`${styles.wrapper} ${isDarkTheme(appTheme) ? styles.dark : styles.light}`}>
      <div className={styles.content}>
        <div>
          <strong className="mr-2">WE'RE COMING SOON</strong><RocketTwoTone style={TITLE_FONT_SIZE}/>
        </div>
        <p>
          We are working very hard on the new version of our site. It will bring a lot of new features. Stay
          tuned!
        </p>
      </div>
    </div>
  )
};

export default memo(Mock);