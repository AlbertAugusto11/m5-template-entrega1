import { NextFunction, Request, Response } from "express";
import { prisma } from "../database/prisma";

export class IsCategoryValid {
    static async execute(req: Request, res: Response, next: NextFunction) {
        const categoryId = req.body.categoryId

        if (categoryId == undefined) {

        } else {
            const findCategoryId = await prisma.category.findFirst({ where: { id: categoryId } })
            if (!findCategoryId) {
                return res.status(404).json({message: "Category not found"})
            }
        }

        next()
    }
}