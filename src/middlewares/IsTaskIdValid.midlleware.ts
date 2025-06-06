import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class IsTaskIdValid {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const data = await prisma.task.findFirst({ where: { id: Number(req.params.id) } })

        if (!data) {
            return res.status(404).json({ message: "Task not found" })
        }

        next()
    }
}