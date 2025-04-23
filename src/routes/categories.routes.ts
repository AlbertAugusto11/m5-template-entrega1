import { Router } from "express";
import { CategoryControllers } from "../controllers/category.controllers";
import { IsCategoryValid2 } from "../middlewares/IsCategoryValid2";
import { ValidCategoryBody } from "../middlewares/validCategoryBody.midlleware";

export const categoriesRoutes = Router()

const categoryControllers = new CategoryControllers()

categoriesRoutes.post("/", ValidCategoryBody.execute, categoryControllers.create)

categoriesRoutes.delete("/:id", IsCategoryValid2.execute, categoryControllers.delete)