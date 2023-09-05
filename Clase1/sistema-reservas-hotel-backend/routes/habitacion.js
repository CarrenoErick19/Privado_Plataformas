// routes/habitacion.js
const express = require('express');
const router = express.Router();
const Habitacion = require('../models/habitacion');

// Ruta para obtener todas las habitaciones
router.get('/', async (req, res) => {
  try {
    const habitaciones = await Habitacion.find();
    res.json(habitaciones);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las habitaciones' });
  }
});

module.exports = router;
