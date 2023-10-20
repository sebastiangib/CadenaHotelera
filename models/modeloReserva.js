import mongoose from "mongoose";

const Schema = mongoose.Schema

const Reserva = new Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido: {
        type: String,
        required: true
    },
    telefono: {
        type: Number,
        required: true
    },
    fechaInicial: {
        type: Date,
        required: true
    },
    fechaFinal: {
        type: Date,
        required: true
    },
    numeroPersonas: {
        type: Number,
        required: true
    }
})

export const modeloReserva = mongoose.model('reservas',Reserva)