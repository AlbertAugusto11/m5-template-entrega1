import { Router } from "express";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { createTasksBody } from "../schemas/tasks.schemaZod";
import { IsCategoryValid } from "../middlewares/IsCategoryValid";
import { TasksControllers } from "../controllers/tasks.controllers";
import { IsCategoryValid3 } from "../middlewares/IsCategoryValid3";
import { IsTaskIdValid } from "../middlewares/IsTaskIdValid.midlleware";

export const tasksRoutes = Router()
const taskscontrollers = new TasksControllers()

tasksRoutes.post("/", ValidateBody.execute({body: createTasksBody}), IsCategoryValid.execute, taskscontrollers.create)

tasksRoutes.get("/", IsCategoryValid3.execute, taskscontrollers.read)

tasksRoutes.get("/:id", IsTaskIdValid.execute, taskscontrollers.getToId)

tasksRoutes.patch("/:id", IsTaskIdValid.execute)

tasksRoutes.delete("/:id", IsTaskIdValid.execute, taskscontrollers.delete)