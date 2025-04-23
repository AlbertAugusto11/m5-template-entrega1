import "reflect-metadata";
import express, { json } from "express";
import helmet from "helmet";
import { tasksRoutes } from "./routes/tasks.routes";
import { categoriesRoutes } from "./routes/categories.routes";

export const app = express()

app.use(json())

app.use(helmet())

app.use("/tasks", tasksRoutes)

app.use("/categories", categoriesRoutes)