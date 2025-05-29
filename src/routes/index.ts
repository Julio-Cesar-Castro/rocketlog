import { Router } from "express";

import { usersRoutes } from "./users-routes";
import { sessionRoutes } from "./sessions-routes";

export const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/sessions", sessionRoutes)