import z from "zod";

export const createTaskBodySchema = z.object({
    titulo:    z.string(),
    descricao: z.string(),
    prazo:     z.string()
})

export const completeTaskParamsSchema = z.object({
    id: z.string()
});

export const deleteTaskParamsSchema = z.object({
    id: z.string()
});