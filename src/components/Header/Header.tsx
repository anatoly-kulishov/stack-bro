import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Layout } from 'antd';

import styles from './Header.module.scss';
import { SearchPanel } from './SearchPanel/SearchPanel';
import { AudioPlayer } from './AudioPlayer/AudioPlayer';
import { Logo } from './Logo/Logo';
import { getAppState } from '../../store/selectors/app-selectors';
import { isDarkTheme, isLightTheme } from '../../utils/boolean-helpers';
import { MyAccountContainer } from './MyAccount/MyAccountContainer';

export const Header: FC = () => {
  const { theme } = useSelector(getAppState);

  return (
    <Layout.Header
      className={`${styles.header} ${isLightTheme(theme) && styles.lightHeader} ${
        isDarkTheme(theme) && styles.darkHeader
      } site-layout-background`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-1 col-lg-2">
            <Logo theme={theme} />
          </div>
          <div className="d-none d-md-block col-md-3 col-lg-3">
            <SearchPanel theme={theme} />
          </div>
          <div className="d-none d-md-block col-md-5">
            <AudioPlayer />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <MyAccountContainer theme={theme} />
          </div>
        </div>
      </div>
    </Layout.Header>
  );
};
