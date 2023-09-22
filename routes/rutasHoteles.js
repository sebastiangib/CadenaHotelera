// Espacio para definir las rutas  o endpoints especificos de su API
import express from 'express'

export let rutasAPI=express.Router()

// Aca pone sus endpoints
rutasAPI.post('/api/habitaciones', function (req, res) {
    res.send('Estoy guardando una habitacion')
})

rutasAPI.get('/api/habitaciones', function (req, res) {
    res.send('Estoy buscando todas las habitaciones')
})

rutasAPI.get('/api/habitacion', function (req, res) {
    res.send('Estoy buscando una habitacion')
})

rutasAPI.put('/api/habitaciones', function (req, res) {
    res.send('Estoy actualizando una habitacion ')
})

rutasAPI.delete('/api/habitaciones', function (req, res) {
    res.send('Estoy elimando una habitacion ')
})

rutasAPI.post('/api/reservas', function (req, res) {
    res.send('Estoy guardando una reserva')
})

rutasAPI.get('/api/reservas', function (req, res) {
    res.send('Estoy buscando todas las reservas')
})

rutasAPI.get('/api/reservas', function (req, res) {
    res.send('Estoy buscando una reserva')
})

rutasAPI.put('/api/reservas', function (req, res) {
    res.send('Estoy actualizando una reserva')
})

rutasAPI.delete('/api/reservas', function (req, res) {
    res.send('Estoy elimando una reserva')
})


