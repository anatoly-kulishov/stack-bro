import React, {lazy} from 'react';
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
        path: "/users",
        exact: true,
        component: <Users/>,
    },
    {
        path: "/news",
        exact: true,
        component: <News/>,
    },
    {
        path: "/settings",
        exact: true,
        component: withSuspense(Settings)
    },
    {
        path: "/help",
        exact: true,
        component: withSuspense(Help),
    },
    {
        path: "/sandbox",
        exact: true,
        component: <Sandbox/>
    },
    {
        path: "/dialogs/:id?",
        exact: true,
        component: <Dialogs/>,
    },
    {
        path: "/:userId?",
        exact: true,
        component: <Profile/>
    }
];
