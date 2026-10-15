import fastify, { type FastifyReply, type FastifyRequest } from "fastify"
import { completeTaskParamsSchema, createTaskBodySchema, deleteTaskParamsSchema } from "./schemas/index.js"
import { db } from "./db.js"

const app = fastify()

const PORT = 5000

// Health Check
app.get("/api", (req: FastifyRequest, res: FastifyReply) => {
    return res.status(200).send({
        message: `API de Tarefas Rodando na Porta ${PORT}...`
    })
})

// Criar Tarefa
app.post("/api/tarefas", (req: FastifyRequest, res: FastifyReply) => {
    const data = createTaskBodySchema.parse(req.body)
    const { titulo, descricao, prazo } = data

    db.insert(titulo, descricao, prazo)

    return res.status(201).send({
        message: "Tarefa Criada com Sucesso"
    })
})

// Listar Tarefas 
app.get("/api/tarefas", (req: FastifyRequest, res: FastifyReply) => {
    const tarefas = db.select() 

    return res.status(200).send({
        tarefas
    })
})

// Concluir Tarefa
app.post("/api/tarefas/:id/complete", (req: FastifyRequest, res: FastifyReply) => {
    const data = completeTaskParamsSchema.parse(req.params)
    const { id } = data

    db.complete(id)

    return res.status(200).send({
        message: "Tarefa marcada como concluída com sucesso!"
    })
})

// Deletar Tarefa
app.delete("/api/tarefas/:id/delete", (req: FastifyRequest, res: FastifyReply) => {
    const data = deleteTaskParamsSchema.parse(req.params)
    const { id } = data

    db.delete(id)

    return res.status(204).send({
        message: "Tarefa deletada com sucesso!"
    })
})

app.listen({
    port: PORT
}, () => {
    console.log(`Servidor Rodando em: http://localhost:${PORT}/api/tarefas`)
})