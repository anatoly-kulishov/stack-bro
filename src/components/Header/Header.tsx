import React, { FC } from 'react';
import { Layout, Tag } from 'antd';
import { GithubFilled, LinkedinOutlined } from '@ant-design/icons';

import { MyAccountContainer } from './MyAccount/MyAccountContainer';
import { AudioPlayer } from './AudioPlayer/AudioPlayer';
import { Logo } from './Logo/Logo';
import styles from './Header.module.scss';

export const Header: FC = () => {
  return (
    <Layout.Header className={`${styles.header} site-layout-background`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6 col-md-1 col-lg-2">
            <Logo />
          </div>
          <div className="d-none d-md-block col-md-3 col-lg-3 text-center">
            <a href="https://www.linkedin.com/in/anatoliy-kulishov-845392212/" target="_blank" rel="noreferrer">
              <Tag icon={<LinkedinOutlined />} color="#55acee">
                LinkedIn
              </Tag>
            </a>
            <a href="https://github.com/dogram99" target="_blank" rel="noreferrer">
              <Tag icon={<GithubFilled />} color="#333" style={{ marginRight: 0 }}>
                GitHub
              </Tag>
            </a>
          </div>
          <div className="d-none d-md-block col-md-5">
            <AudioPlayer />
          </div>
          <div className="col-6 col-md-3 col-lg-2">
            <MyAccountContainer />
          </div>
        </div>
      </div>
    </Layout.Header>
  );
};
