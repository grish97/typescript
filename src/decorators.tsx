import React, { Fragment } from "react";
import {Route} from "react-router-dom";

type RouteType = {
    path: string,
    exact?: boolean,
    component: any,
    isLayout?: boolean
}

export const GRoute =  (routes: RouteType[]) => {
    return (target: any) => {
        let allRoutes: any = (
            <Fragment>
                {
                    routes.map((route: any, key: number) => (
                        <Route key={key} path={route.path} exact={route.exact} render={
                            // renderComponent(route.component, route.isLayout)
                            route.component
                        }/>
                    ))
                }
            </Fragment>
        );

        target.routes = allRoutes;
    }
};