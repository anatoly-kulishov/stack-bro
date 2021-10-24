import React, {lazy} from 'react';
import {withSuspense} from "../hoc/withSuspense";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Users from "../components/Users";
import {IRouteType} from "../types";

// Lazy Pages
const Settings = lazy(() => import("../components/Settings"));
const Help = lazy(() => import("../components/Help"));
const NewsPage = lazy(() => import('../components/News'));
const MessengerPage = lazy(() => import("../pages/MessengerPage"));
const SandBoxPage = lazy(() => import("../components/SandBox"));

export const publicRoutes: IRouteType[] = [
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

export const privateRoutes: IRouteType[] = [
    {
        path: "/users",
        exact: true,
        component: <Users/>
    },
    {
        path: "/news",
        exact: true,
        component: withSuspense(NewsPage)
    },
    {
        path: "/settings",
        exact: true,
        component: withSuspense(Settings)
    },
    {
        path: "/help",
        exact: true,
        component: withSuspense(Help)
    },
    {
        path: "/sandbox",
        exact: true,
        component: withSuspense(SandBoxPage)
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