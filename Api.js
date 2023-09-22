// Esta clase representa un servidor
import express from 'express'
import { rutasAPI } from './routes/rutasHoteles'

export class Api{
    constructor(){
        this.app = express()
        this.procesarPeticiones()
    }

    // 1. Levantar el servidor
    levantarServidor(){
        this.app.listen(3000,function(){
            console.log("Servidor abierto")
        })
    }

    // 2. Atiende las peticiones y responde
    procesarPeticiones(){
        this.app.use("/",rutasAPI)
    }
    // 3. Se conecta a la base de datos

}