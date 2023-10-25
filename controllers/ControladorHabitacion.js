import { ServicioHabitacion } from "../Services/ServicioHabitacion.js"

export class ControladorHabitacion{
    constructor(){}

     async buscarTodas(request, response){
        try{
            // 1. Hay que recibir datos
            // 2. Intentare conectarme a BD
            // 3. Envio la respuesta

            let serviciohabitacion = new ServicioHabitacion()
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las habitaciones",
                "datos": await serviciohabitacion.buscarTodas()
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando las habitaciones " + error,
                "datos":null
            })
        }
    }

    async buscarPorId(request, response){
        try{
            // 1. Hay que recibir datos (Si)
            let serviciohabitacion = new ServicioHabitacion()
            let id = request.params.id

            // 2. Con el id que mando el cliente busco la habitacion en BD
            // 3. Respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la habitacion",
                "datos": await serviciohabitacion.buscarPorId(id)
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando la habitacion " + error,
                "datos":null
            })
        }
    }

    async modificar(request, response){
        try{
            // 1. Hay que recibir datos (Si)
            let serviciohabitacion = new ServicioHabitacion()
            let id = request.params.id
            let datosModificar = request.body
            await serviciohabitacion.modificar(id,datosModificar) // ESTO

            // 2. Modificar en BD
            // 3. Enviar la respuesta
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito modificando la habitacion",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos modificando la habitacion " + error,
                "datos":null
            })
        }
    }

    async registrar(request, response){
        try{
            // 1. Hay que recibir datos (Si)
            let serviciohabitacion = new ServicioHabitacion()
            let datosRegistrar = request.body
            // TOMAR 2 FECHAS DEL OBJETO DATOS
            // LA DIFERENCIA EN DIA DE ESAS DOS FECHAS
            await serviciohabitacion.registrar(datosRegistrar)

            // 2. Guardelos en BD
            // 3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito registrando la habitacion",
                "datos":datosRegistrar,
                "diferencia": "diferencia en dia calculado"
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos registrando la habitacion " + error,
                "datos":null
            })
        }
    }

    async eliminar(request, response){
        try{
            // 1. Hay que recibir datos (Si)
            let serviciohabitacion = new ServicioHabitacion()
            let id = request.params.id

            await serviciohabitacion.eliminar(id)

            //ELIMINAR DATOS (RESERVAS TAMBIEN)

            // 2 . Eliminelo de la BD
            // 3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito borrando la habitacion",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos borrando la habitacion " + error,
                "datos":null
            })
        }
    }
}

