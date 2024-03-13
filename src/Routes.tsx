import React from 'react';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import Main from 'tools/pages/Main';
import AppService from 'tools/services/appService';

export function Routes() {
    const appps = AppService.getApps();
    const appsRoutes = appps.map((app) => {
        const Component = app.component;
        return {
            path: app.route,
            element: <Component />,
        };
    });

    const routes = createBrowserRouter([
        ...appsRoutes,
        {
            path: '/main',
            element: <Main />,
        },

        {
            path: '/',
            loader: () => redirect('/main'),
        },
    ]);
    return <RouterProvider router={routes} />;
}
