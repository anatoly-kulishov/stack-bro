import React from 'react';
import Profile from "../components/Profile";
import Dialogs from "../components/Dialogs";
import News from "../components/News";
import Music from "../components/Music";
import Settings from "../components/Settings";
import Login from "../components/Login";
import UserContainer from "../components/Users/UsersContainer";

export const appRoutes = [
    {
        path: "/profile",
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
        component: <UserContainer/>,
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
];

export const authRoutes = [
    {
        path: "/",
        exact: true,
        component: <Login/>
    }
];