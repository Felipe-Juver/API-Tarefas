import { randomUUID } from "crypto"

interface Tarefa {
    id:        string
    titulo:    string
    descricao: string
    prazo:     string
    feito:     boolean
}

class Database {

    tarefas: Tarefa[] = []

    constructor(){}

    public insert(titulo: string, descricao: string, prazo: string){

        const tarefa: Tarefa = {
            id:        randomUUID(),
            titulo:    titulo,
            descricao: descricao,
            prazo:     prazo,
            feito:     false
        }

        this.tarefas.push(tarefa)

    }

    public select(){
        return this.tarefas
    }

    public complete(id: string){
        
        // Busca Indice da Tarefa
        const idx = this.tarefas.findIndex((tarefa: Tarefa) => tarefa.id === id)

        if(idx === -1) return 

        this.tarefas[idx]!.feito = true

    }


    public delete(id: string){
        this.tarefas = this.tarefas.filter((tarefa: Tarefa) => tarefa.id !== id)

        
    }
}

const db = new Database()

export { db }