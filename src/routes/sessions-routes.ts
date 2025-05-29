import { Router } from "express";
import { SessionsController } from "@/controllers/sessions-controller";

export const sessionRoutes = Router()
const sessionsController = new SessionsController()

sessionRoutes.post("/", sessionsController.create)