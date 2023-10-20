import mongoose from "mongoose";

const Schema = mongoose.Schema

const Habitacion = new Schema({
    nombre: {
        type: String,
        required: true
    },
    fotos: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    precioNoche: {
        type: Number,
        required: true
    }
})

export const modeloHabitacion = mongoose.model('habitaciones',Habitacion)