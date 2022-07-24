import { Router } from "express"

import SessionController from "./app/controllers/SessionController"
import UserController from "./app/controllers/UserController"
import PatientController from "./app/controllers/PatientController"
import ConsultationController from "./app/controllers/ConsultationController"

import authMiddleware from "./app/middleware/auth"

const routes = new Router()

routes.post("/users", UserController.store)
routes.post("/sessions", SessionController.store)
routes.get("/patients", PatientController.index)
routes.post("/patients", PatientController.store)

routes.use(authMiddleware)

routes.put("/consultation/:id", ConsultationController.update)
routes.get("/consultation", ConsultationController.index)
routes.post("/consultation", ConsultationController.store)
routes.delete("/consultation/:id", ConsultationController.delete)

export default routes
