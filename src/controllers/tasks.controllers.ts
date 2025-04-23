import { Request, Response } from "express";
import { TasksServices } from "../services/tasks.services";

export class TasksControllers {
    async create (req: Request, res: Response) {
        const tasksservices = new TasksServices()

        const response =  await tasksservices.create(req.body)

        return res.status(201).json(response)
    }

    async read (req: Request, res: Response) {
        const tasksservices = new TasksServices()

        const response = await tasksservices.read(req.query.category as string | undefined)

        return res.status(200).json(response)
    }

    async getToId (req: Request, res: Response) {
        const tasksservices = new TasksServices()

        const response = await tasksservices.getToId(Number(req.params.id))

        return res.status(200).json(response)
    }

    async update (req: Request, res: Response) {
        const tasksservices = new TasksServices()

        const response = await tasksservices.update(Number(req.params.id), req.body)

        return res.status(200).json(response)

    }

    async delete (req: Request, res: Response) {
        const tasksservices = new TasksServices()

        const response = await tasksservices.delete(Number(req.params.id))

        return res.status(204).json(response)
    }


}