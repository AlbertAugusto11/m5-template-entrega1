import { injectable } from "tsyringe";
import { prisma } from "../database/prisma";
import { TTasks } from "../schemas/tasks.schemaZod";

@injectable()
export class TasksServices {
    async create(task: TTasks) {
        const newTask = await prisma.task.create({ data: task })

        return newTask
    }

    async read(busca?: string | undefined) {

        const data = await prisma.task.findMany({ include: { category: true } })
        let data2 = data.map(({ categoryId, ...resto }) => resto)

        if (busca !== undefined) {
            const response = data2.filter(element => element.category?.name.toLowerCase() == busca.toLowerCase())

            return response

        } else {

            return data2
        }
    }

    async getToId(id: number) {
        const data = await prisma.task.findMany({ include: { category: true } })

        let data2 = data.map(({ categoryId, ...resto }) => resto)
        
        let data3 = data2.find(element => element.id == id)

        return data3
    }

    async update(id: number, task: TTasks) {
        const data = await prisma.task.update({ where: { id: id }, data: task })

        return data
    }

    async delete(id: number) {
        const data = await prisma.task.delete({ where: { id: id } })

        return data
    }

}