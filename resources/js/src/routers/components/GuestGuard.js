import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../utilities/hook/useAuth";
import useRequests from "../../utilities/hook/useRequests";

export const GuestGuard = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();
    const { isRequestPending } = useRequests();
    if (isRequestPending('loginAccount')) {
        return <>GuestGuard Loading ... </>;
    }

    if (auth?.user?.token && auth?.user?.role) {
        const {role} = auth.user;
        return <Navigate to={role == "user" ? "/users" : "/admins"} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};
