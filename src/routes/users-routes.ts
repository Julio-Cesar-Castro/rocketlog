import { Router } from "express";
import { UsersController } from "@/controllers/users-controller";

export const usersRoutes = Router()

const usersControllers = new UsersController()

usersRoutes.post("/", usersControllers.create)