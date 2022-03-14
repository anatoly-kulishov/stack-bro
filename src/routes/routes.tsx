import React, { lazy } from 'react';

import { withSuspense } from '../hoc/withSuspense';
import { IRouteType } from '../types';
import { ProfileWithRouter } from '../components/Profile/Profile';
import { LoginPage } from '../pages/LoginPage/LoginPage';

const MessengerPage = lazy(() => import('../pages/MessengerPage/MessengerPage'));
const UsersPage = lazy(() => import('../pages/UsersPage/UsersPage'));
const HelpPage = lazy(() => import('../pages/HelpPage/HelpPage'));

export const publicRoutes: IRouteType[] = [
  {
    path: '/',
    exact: true,
    component: <LoginPage />,
  },
];

export const privateRoutes: IRouteType[] = [
  {
    path: '/users',
    exact: true,
    component: withSuspense(UsersPage),
  },
  {
    path: '/help',
    exact: true,
    component: withSuspense(HelpPage),
  },
  {
    path: '/messenger/:id?',
    exact: true,
    component: withSuspense(MessengerPage),
  },
  {
    path: '/:userId?',
    exact: true,
    component: <ProfileWithRouter />,
  },
];
