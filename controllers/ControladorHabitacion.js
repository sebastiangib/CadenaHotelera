export class ControladorHabitacion{
    constructor(){}

    buscarTodas(request, response){
        try{
            // 1. Hay que recibir datos
            // 2. Intentare conectarme a BD
            // 3. Envio la respuesta

            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando las habitaciones",
                "datos":"ACA VAN LOS DATOS CONSULTADOS DE LA BD"
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando las habitaciones " + error,
                "datos":null
            })
        }
    }

    buscarPorId(request, response){
        try{
            // 1. Hay que recibir datos (Si)

            let id = request.params.id

            // 2. Con el id que mando el cliente busco la habitacion en BD
            // 3. Respondo al cliente
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito buscando la habitacion",
                "datos":"ACA VAN LOS DATOS CONSULTADOS DE LA BD"
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos buscando la habitacion " + error,
                "datos":null
            })
        }
    }

    modificar(request, response){
        try{
            // 1. Hay que recibir datos (Si)

            let id = request.params.id
            let datosModificar = request.body

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

    registrar(request, response){
        try{
            // 1. Hay que recibir datos (Si)

            let datosRegistrar = request.body

            // 2. Guardelos en BD
            // 3. Responda
            response.status(200).json({
                "estado":true,
                "mensaje":"Exito registrando la habitacion",
                "datos":null
            })
        }catch(error){
            response.status(400).json({
                "estado":false,
                "mensaje":"Fallamos registrando la habitacion " + error,
                "datos":null
            })
        }
    }

    eliminar(request, response){
        try{
            // 1. Hay que recibir datos (Si)

            let id = request.params.id

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

export class ControladorReserva{
    constructor(){}

    buscarTodas(request, response){}
    buscarPorId(request, response){}
    modificar(request, response){}
    registrar(request, response){}
    eliminar(request, response){}
}
