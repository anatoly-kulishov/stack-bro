import React, {lazy} from 'react';
import {Redirect} from "react-router-dom";
import {withSuspense} from "../hoc/withSuspense";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Users from "../components/Users";
import News from "../components/News";
import Dialogs from "../components/Dialogs";
import Sandbox from "../components/Sandbox";

const Settings = lazy(() => import("../components/Settings"));
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
        component: <Redirect to="/profile"/>
    },
    {
        path: "/profile/:userId?",
        component: <Profile/> // Todo
    },
    {
        path: "/dialogs",
        component: <Dialogs/>,
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
        path: "/sandbox",
        component: <Sandbox/>
    },
    {
        path: "/settings",
        component: withSuspense(Settings)
    },
    {
        path: "/help",
        component: withSuspense(Help),
    },
];