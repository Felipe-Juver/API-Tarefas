import { randomUUID } from "crypto"

interface Tarefa {
    id:        string
    titulo:    string
    descricao: string
    prazo:     Date
    feito:     boolean
}

class Database {

    tarefas: Tarefa[] = []

    constructor(){}

    public insert(titulo: string, descricao: string, prazo: Date){

        const tarefa: Tarefa = {
            id:        randomUUID(),
            titulo:    titulo,
            descricao: descricao,
            prazo:     prazo,
            feito:     false

        }

        this.tarefas.push(tarefa)

    }

}

const db = new Database()

export { db }