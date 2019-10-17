import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Home } from "../components/Home";

import { GRoute } from "../decorators";
import { About } from "./About";


@GRoute([
    {
        path: `/`,
        exact: true,
        component: Home,
        isLayout: true
    },
    {
        path: `/about`,
        exact: true,
        component: About,
        isLayout: true
    },
])

export class Router extends Component {
    static routes: any = null;

    render () {
        return (
            <BrowserRouter>
                { Router.routes }
            </BrowserRouter>
        );
    }
}