import { lazy } from "react";
import { ROLES } from "../../utilities/constant/app.constant";
import { AuthGuard } from "../components/AuthGuard";
import { GuestGuard } from "../components/GuestGuard";

export const guestRoutes = [
    {
        path: "/users",
        guard: AuthGuard,
        layout: "Client",
        permissions: [ROLES.USER],
        component: lazy(() => import(`../../pages/client/dashboard`)),
    },
    {
        path: "/client/payments",
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.USER, ROLES.SUPERADMIN],
        component: lazy(() => import(`../../pages/client/payment/add`)),
    },
    {
        path: "/twittes",
        layout: "Admin",
        guard: AuthGuard,
        permissions: [ROLES.USER, ROLES.ADMIN, ROLES.SUPERADMIN],
        component: lazy(() => import(`../../pages/others/twitte`)),
    },
];
