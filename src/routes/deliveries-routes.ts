import { Router } from "express";
import { DeliveriesController } from "@/controllers/deliveries-controller";
import { ensureAuthenticated } from "@/middlewares/ensure-authenticated";
import { DeliviersStatusController } from "@/controllers/deliveries-status-controller";

import { verifyUserAuthorization } from "@/middlewares/verifyUserAuthorization";

export const deliveriesRoutes = Router()

const deliveriesController = new DeliveriesController()
const deliviersStatusController = new DeliviersStatusController()

deliveriesRoutes.use(ensureAuthenticated, verifyUserAuthorization(["sale"]))
deliveriesRoutes.post("/", deliveriesController.create)
deliveriesRoutes.get("/", deliveriesController.index)

deliveriesRoutes.patch("/:id/status", deliviersStatusController.update)