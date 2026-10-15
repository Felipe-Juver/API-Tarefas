import z from "zod";

export const createTaskBodySchema = z.object({
    titulo:    z.string(),
    descricao: z.string(),
    prazo:     z.date()
})