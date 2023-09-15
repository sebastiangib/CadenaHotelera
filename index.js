// Importando la herramienta
const express = require('express')
const app = express()

// Atendiendo peticiones
app.post('/api/habitaciones', function (req, res) {
    res.send('Estoy guardando una habitacion')
})

app.get('/api/habitaciones', function (req, res) {
    res.send('Estoy buscando todas las habitaciones')
})

app.get('/api/habitacion', function (req, res) {
    res.send('Estoy buscando una habitacion')
})

app.put('/api/habitaciones', function (req, res) {
    res.send('Estoy actualizando una habitacion ')
})

app.delete('/api/habitaciones', function (req, res) {
    res.send('Estoy elimando una habitacion ')
})

// Levantando un servidor
app.listen(3000,function(){
    console.log("Servidor abierto")
})