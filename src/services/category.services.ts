import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TCategories } from "../schemas/categories.schemaZod";

@injectable()
export class CategoryServices {
    async create(category: TCategories) {
        const newCategory = await prisma.category.create({ data: category })

        return newCategory
    }

    async delete(id: number) {
        const deleteCategory = await prisma.category.delete({ where: { id: id } })
    }
}