import { Router } from "express";
import { IsCategoryValid } from "../middlewares/IsCategoryValid.midlleware";
import { TasksControllers } from "../controllers/tasks.controllers";
import { IsCategoryValid3 } from "../middlewares/IsCategoryValid3.midlleware";
import { IsTaskIdValid } from "../middlewares/IsTaskIdValid.midlleware";
import { ValidTaskBody } from "../middlewares/validTaskBody.middleware";
import { container } from "tsyringe";
import { TasksServices } from "../services/tasks.services";

export const tasksRoutes = Router()

container.registerSingleton("TasksServices", TasksServices)
const taskscontrollers = container.resolve(TasksControllers)

tasksRoutes.post("/", ValidTaskBody.execute, IsCategoryValid.execute, (req, res) => taskscontrollers.create(req, res))

tasksRoutes.get("/", IsCategoryValid3.execute, (req, res) => taskscontrollers.read(req, res))

tasksRoutes.get("/:id", IsTaskIdValid.execute, (req, res) => taskscontrollers.getToId(req, res))

tasksRoutes.patch("/:id", ValidTaskBody.execute, IsTaskIdValid.execute, IsCategoryValid.execute, (req, res) => taskscontrollers.update(req, res))

tasksRoutes.delete("/:id", IsTaskIdValid.execute, (req, res) => taskscontrollers.delete(req, res))