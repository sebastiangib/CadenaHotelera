import {modeloReserva} from '../models/modeloReserva.js'

export class ServicioReserva{

    constructor(){}

    async buscarTodas(){
        const reservas = await modeloReserva.find().select('-__v');
        return reservas;
    }
    async buscarPorId(id){
        const reserva = await modeloReserva.findById(id).select('-__v'); // El signo '-' indica que se excluye el campo __v
        return reserva;
    }
    async modificar(id,datos){
        return await modeloReserva.findByIdAndUpdate(id,datos)
    }
    async registrar(datos){
        let reservaNueva = new modeloReserva(datos)
        return await reservaNueva.save()
    }
    async eliminar(id){
        let eliminarReserva = await modeloReserva.findByIdAndDelete(id)
        return eliminarReserva
    }
    async fechas(id){
        let fecha = await modeloReserva.findById(id)
        let fechaInicio = new Date(fecha.fechaInicial);
        let fechaFin = new Date(fecha.fechaFinal);

        const diferenciaEnMilisegundos = fechaFin - fechaInicio;

        // Convierte la diferencia en milisegundos a días
        const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);

        return diferenciaEnDias;
    }

}
