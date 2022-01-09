/** Libs **/
import React, {lazy} from 'react';

/** Utils **/
import {withSuspense} from "../hoc/withSuspense";
import {IRouteType} from "../types";

/** Pages **/
import Profile from "../components/Profile";
import LoginPage from "../pages/LoginPage";

/** Lazy Pages **/
const MessengerPage = lazy(() => import("../pages/MessengerPage"));
const UsersPage = lazy(() => import('../pages/UsersPage'));
const NewsPage = lazy(() => import('../pages/NewsPage'));
const HelpPage = lazy(() => import('../pages/HelpPage'));

export const publicRoutes: IRouteType[] = [
    {
        path: "/",
        exact: true,
        component: <LoginPage/>
    }
];

export const privateRoutes: IRouteType[] = [
    {
        path: "/users",
        exact: true,
        component: withSuspense(UsersPage)
    },
    {
        path: "/news",
        exact: true,
        component: withSuspense(NewsPage)
    },
    {
        path: "/help",
        exact: true,
        component: withSuspense(HelpPage)
    },
    {
        path: "/messenger/:id?",
        exact: true,
        component: withSuspense(MessengerPage)
    },
    {
        path: "/:userId?",
        exact: true,
        component: <Profile/>
    }
];