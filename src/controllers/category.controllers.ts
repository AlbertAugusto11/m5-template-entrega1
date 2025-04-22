import { Request, Response } from "express";
import { CategoryServices } from "../services/category.services";

export class CategoryControllers {
    async create (req: Request, res: Response) {
        const categoryservices = new CategoryServices()

        const reponse = await categoryservices.create(req.body)

        return res.status(201).json(reponse)
    }

    async delete (req: Request, res: Response) {
        const categoryservices = new CategoryServices()

        const reponse = await categoryservices.delete(Number(req.params.id))

        return res.status(204).json(reponse)
    }
}