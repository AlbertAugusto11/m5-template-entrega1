import { Router } from "express";
import { CategoryControllers } from "../controllers/category.controllers";
import { IsCategoryValid2 } from "../middlewares/IsCategoryValid2.midlleware";
import { ValidCategoryBody } from "../middlewares/validCategoryBody.midlleware";
import { container } from "tsyringe";
import { CategoryServices } from "../services/category.services";

export const categoriesRoutes = Router()

container.registerSingleton("CategoryServices", CategoryServices)
const categoryControllers = container.resolve(CategoryControllers)

categoriesRoutes.post("/", ValidCategoryBody.execute, (req, res) => categoryControllers.create(req, res))

categoriesRoutes.delete("/:id", IsCategoryValid2.execute, (req, res) => categoryControllers.delete(req, res))