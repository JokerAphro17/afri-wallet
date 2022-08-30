import { lazy } from "react";

const websiteRoutes = [
    {
        path: "/",
        component: lazy(() => import(`../../pages/website/login`)),
        layout: "Blank",
    },    
];

export default websiteRoutes;
