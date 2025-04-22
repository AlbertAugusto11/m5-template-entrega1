import { Router } from "express";
import { ValidateBody } from "../middlewares/validateBody.middleware";
import { createCategoriesBody } from "../schemas/categories.schemaZod";
import { CategoryControllers } from "../controllers/category.controllers";
import { IsCategoryValid2 } from "../middlewares/IsCategoryValid2";

export const categoriesRoutes = Router()

const categoryControllers = new CategoryControllers()

categoriesRoutes.post("/", ValidateBody.execute({body: createCategoriesBody}), categoryControllers.create)

categoriesRoutes.delete("/:id", IsCategoryValid2.execute, categoryControllers.delete)