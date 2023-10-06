// Espacio para definir las rutas  o endpoints especificos de su API
import express from 'express'

// Importo los controladores
import { ControladorHabitacion } from '../controllers/ControladorHabitacion.js'


export let rutasAPI=express.Router()

// Aca pone sus endpoints
rutasAPI.post('/api/habitaciones')
rutasAPI.get('/api/habitaciones')
rutasAPI.get('/api/habitacion/:id')
rutasAPI.put('/api/habitaciones/:id')
rutasAPI.delete('/api/habitaciones/:id')

rutasAPI.post('/api/reservas')
rutasAPI.get('/api/reservas')
rutasAPI.get('/api/reserva/:id')
rutasAPI.put('/api/reservas/:id')
rutasAPI.delete('/api/reservas/:id')


