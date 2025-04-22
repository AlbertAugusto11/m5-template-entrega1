import {z} from "zod"

export const createCategoriesBody = z.object({
    id: z.number().optional(),
    name: z.string()    
})

export type TCategories = z.infer<typeof createCategoriesBody>