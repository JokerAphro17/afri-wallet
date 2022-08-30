// renderRoutes

import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Render from "./components/Render";

export const renderRoutes = (routes) => {
    return (
        <Routes>
            {routes.map((route, index) => {
                const { path, component, permissions, layout, guard } = route;
                const Guard = guard || Fragment;

                return (
                    <Route
                        key={index}
                        path={path}
                        element={
                            <Guard>
                                <Render
                                    roles={permissions ?? []}
                                    layout={layout}
                                    page={component}
                                />
                            </Guard>
                        }
                    />
                );
            })}
        </Routes>
    );
};
