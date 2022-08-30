import { adminRoutes } from "./admin";
import { guestRoutes } from "./guest";
import otherRoutes from "./other";
import websiteRoutes from "./website";

const routes = [...guestRoutes, ...adminRoutes, ...otherRoutes, ...websiteRoutes];

export default routes;


