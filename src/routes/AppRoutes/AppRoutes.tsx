import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';

import { MessengerPage } from '../../pages/MessengerPage/MessengerPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { UsersPage } from '../../pages/UsersPage/UsersPage';
import { HelpPage } from '../../pages/HelpPage/HelpPage';
import { NoMatch } from '../../components/NoMatch/NoMatch';
import { Header } from '../../components/Header/Header';
import { NavBar } from '../../components/NavBar/NavBar';
import { AppRoutesEnum } from '../../types';

const { Content } = Layout;

export const AppRoutes: FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout className="site-layout">
        <div className="container">
          <div className="row mt-3">
            <div className="col-12 d-none d-lg-block col-md-3 col-lg-2 pr-0">
              <NavBar />
            </div>
            <div className="col-12 col-md-9 col-xl-10">
              <Content>
                <Routes>
                  <Route path={AppRoutesEnum.HOME} element={<ProfilePage />}>
                    <Route path={AppRoutesEnum.SOME_USER} element={<ProfilePage />} />
                  </Route>
                  <Route path={AppRoutesEnum.MESSENGER} element={<MessengerPage />} />
                  <Route path={AppRoutesEnum.USERS} element={<UsersPage />} />
                  <Route path={AppRoutesEnum.HELP} element={<HelpPage />} />
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </Content>
            </div>
          </div>
        </div>
      </Layout>
    </Layout>
  );
};
