import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../utilities/hook/useAuth';
import useRequests from '../../utilities/hook/useRequests';

export const AuthGuard = ({ children }) => {
    const auth = useAuth();
    const location = useLocation();
    const { isRequestPending } = useRequests();

    if (isRequestPending('loginAccount')) {
        return <>AuthGuard Loading ... </>;
    }

    if (!auth?.user?.token) {
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    }

    return <>{children}</>;
};
