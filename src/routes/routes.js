import React, {lazy} from 'react';
import {withSuspense} from "../hoc/withSuspense";
import Login from "../components/Login";
import Profile from "../components/Profile";
import News from "../components/News";
import Music from "../components/Music";
import Settings from "../components/Settings";
import Users from "../components/Users";

const Dialogs = lazy(() => import("../components/Dialogs"));
const Help = lazy(() => import("../components/Help"));

export const authRoutes = [
    {
        path: "/",
        exact: true,
        component: <Login/>
    },
    {
        path: "/reset-password",
        exact: true,
        component: <div>Soon</div>
    }
];

export const appRoutes = [
    {
        path: "/",
        exact: true,
        component: <Profile/> // Todo
    },
    {
        path: "/profile/:userId?",
        exact: true,
        component: <Profile/> // Todo
    },
    {
        path: "/dialogs",
        component: withSuspense(Dialogs),
    },
    {
        path: "/users",
        component: <Users/>,
    },
    {
        path: "/news",
        component: <News/>,
    },
    {
        path: "/music",
        component: <Music/>,
    },
    {
        path: "/settings",
        component: <Settings/>,
    },
    {
        path: "/help",
        component: withSuspense(Help),
    },
];