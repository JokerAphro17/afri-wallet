import React from "react";
import MainLoadable from "./components/loadable";
import {AuthProvider} from './utilities/context/authContext'
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";
import { RequestsProvider } from "./utilities/context/requestsContext";
import { renderRoutes } from "./routers/renderRoutes";
import routes from "./routers/routes";

const App = () => {
    return (
        <AuthProvider>
            <RequestsProvider>
                <BrowserRouter>
                    <MainLoadable>
                        {renderRoutes(routes)}
                        <ToastContainer />
                    </MainLoadable>
                </BrowserRouter>
            </RequestsProvider>
        </AuthProvider>
    )
};

export default App;
