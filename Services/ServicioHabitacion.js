import {modeloHabitacion} from '../models/modeloHabitacion.js'

export class ServicioHabitacion{

    constructor(){}

    async buscarTodas(){
        const habitaciones = await modeloHabitacion.find().select('-__v');
        return habitaciones;
    }
    async buscarPorId(id){
        const habitacion = await modeloHabitacion.findById(id).select('-__v'); // El signo '-' indica que se excluye el campo __v
        return habitacion;
    }
    async modificar(id,datos){
        return await modeloHabitacion.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let habitacionNueva = new modeloHabitacion(datos)
        return await habitacionNueva.save()
    }
    async eliminar(id){
        let eliminarHabitacion = await modeloHabitacion.findByIdAndDelete(id)
        return eliminarHabitacion
    }

}
