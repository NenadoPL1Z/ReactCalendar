import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";

export interface IRout {
    path: string;
    components: React.ComponentType;
    exact?: boolean
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/'
}

export const publicRoutes: IRout[] = [
    {path: RouteNames.LOGIN, components: Login, exact: true},
]

export const privateRoutes: IRout[] = [
    {path: RouteNames.EVENT, components: Event, exact: true}
]
