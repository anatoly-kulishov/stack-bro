import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import { MessengerPage } from '../../pages/MessengerPage/MessengerPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import { AppRoutesEnum } from '../../shared/types/routes.types';
import { UsersPage } from '../../pages/UsersPage/UsersPage';
import { GamePage } from '../../pages/GamePage/GamePage';
import { HelpPage } from '../../pages/HelpPage/HelpPage';
import { NoMatch } from '../../components/screens/NoMatch/NoMatch';
import Layout from '../../components/layout';

export const AppRoutes: FC = () => {
  return (
    <Layout>
      <Routes>
        <Route path={AppRoutesEnum.HOME} element={<ProfilePage />}>
          <Route path={AppRoutesEnum.SOME_USER} element={<ProfilePage />} />
        </Route>
        <Route path={AppRoutesEnum.MESSENGER} element={<MessengerPage />} />
        <Route path={AppRoutesEnum.USERS} element={<UsersPage />} />
        <Route path={AppRoutesEnum.HELP} element={<HelpPage />} />
        <Route path={AppRoutesEnum.GAME} element={<GamePage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </Layout>
  );
};
