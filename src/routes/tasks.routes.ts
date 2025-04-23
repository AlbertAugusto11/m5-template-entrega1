import { Router } from "express";
import { IsCategoryValid } from "../middlewares/IsCategoryValid";
import { TasksControllers } from "../controllers/tasks.controllers";
import { IsCategoryValid3 } from "../middlewares/IsCategoryValid3";
import { IsTaskIdValid } from "../middlewares/IsTaskIdValid.midlleware";
import { ValidTaskBody } from "../middlewares/validTaskBody.middleware";

export const tasksRoutes = Router()
const taskscontrollers = new TasksControllers()

tasksRoutes.post("/", IsCategoryValid.execute,  ValidTaskBody.execute, taskscontrollers.create)

tasksRoutes.get("/", IsCategoryValid3.execute, taskscontrollers.read)

tasksRoutes.get("/:id", IsTaskIdValid.execute, taskscontrollers.getToId)

tasksRoutes.patch("/:id",IsTaskIdValid.execute, IsCategoryValid.execute, ValidTaskBody.execute, taskscontrollers.update)

tasksRoutes.delete("/:id", IsTaskIdValid.execute, taskscontrollers.delete)