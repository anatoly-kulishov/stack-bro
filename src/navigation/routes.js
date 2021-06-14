import React from 'react';
import Login from "../components/Login";
import Profile from "../components/Profile";
import Dialogs from "../components/Dialogs";
import News from "../components/News";
import Music from "../components/Music";
import Settings from "../components/Settings";
import Users from "../components/Users";
import Help from "../components/Help";

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
        component: <Profile/>
    },
    {
        path: "/profile/:userId?",
        exact: true,
        component: <Profile/>
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
        path: "/music",
        component: <Music/>,
    },
    {
        path: "/settings",
        component: <Settings/>,
    },
    {
        path: "/help",
        component: <Help/>,
    },
];