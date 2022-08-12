import React, { FC } from 'react';
import { Layout as AntLayout } from 'antd';

import { NavBar } from './NavBar/NavBar';
import { Header } from './Header/Header';

const { Content } = AntLayout;

export const Layout: FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <AntLayout className="h-min-100vh">
      <Header />
      <AntLayout className="site-layout pb-4 pb-md-5 pb-lg-0">
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 col-md-3 col-lg-2 pr-0">
              <NavBar />
            </div>
            <div className="col-12 col-md-9 col-xl-10">
              <Content>{children}</Content>
            </div>
          </div>
        </div>
      </AntLayout>
    </AntLayout>
  );
};
