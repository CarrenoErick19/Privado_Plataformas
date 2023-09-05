// models/habitacion.js
const mongoose = require('mongoose');

const habitacionSchema = new mongoose.Schema({
  numero: String,
  tipo: String,
  precio: Number,
});

module.exports = mongoose.model('Habitacion', habitacionSchema);
