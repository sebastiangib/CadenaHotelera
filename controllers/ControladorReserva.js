import { ServicioReserva } from "../Services/ServicioReserva.js"
export class ControladorReserva{
    constructor(){}

    async buscarTodas(request, response){
        try{
            // 1. Hay que recibir datos
            // 2. Intentare conectarme a BD
            // 3. Envio la respuesta

            let servicioreserva = new ServicioReserva()
            const reservas = await servicioreserva.buscarTodas();
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las reservas",
                "datos":reservas
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando las reservas " + error,
                "datos":null
            })
        }
    }

    async buscarPorId(request, response){
        try{
            // 1. Hay que recibir datos (Si)
            let servicioreserva = new ServicioReserva()
            let id = request.params.id

            // 2. Con el id que mando el cliente busco la habitacion en BD
            // 3. Respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la reserva",
                "datos":await servicioreserva.buscarPorId(id),
                "diferencia":await servicioreserva.fechas(id)
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando la reserva " + error,
                "datos":null
            })
        }
    }

    async modificar(request, response){
        try{
            // 1. Hay que recibir datos (Si)
            let servicioreserva = new ServicioReserva()
            let id = request.params.id
            let datosModificar = request.body
            await servicioreserva.modificar(id,datosModificar) // ESTO

            // 2. Modificar en BD
            // 3. Enviar la respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito modificando la reserva",
                "datos":null // ACA TIENE QUE VER "ESTO"
                
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos modificando la reserva " + error,
                "datos":null
            })
        }
    }

    async registrar(request, response){
        try{
            // 1. Hay que recibir datos (Si)
            let servicioreserva = new ServicioReserva()
            let datosRegistrar = request.body

            await servicioreserva.registrar(datosRegistrar)

            // 2. Guardelos en BD
            // 3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito registrando la reserva",
                "datos":datosRegistrar
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos registrando la reserva " + error,
                "datos":null
            })
        }
    }

    async eliminar(request, response){
        try{
            // 1. Hay que recibir datos (Si)
            let servicioreserva = new ServicioReserva()
            let id = request.params.id

            await servicioreserva.eliminar(id)
            // 2 . Eliminelo de la BD
            // 3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito borrando la reserva",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos borrando la reserva " + error,
                "datos":null
            })
        }
    }
}