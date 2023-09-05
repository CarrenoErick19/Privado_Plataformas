// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

const connectionString = 'mongodb+srv://rogerng:SMITEeslalei1@clustersd.yfxkfiy.mongodb.net/'; // Reemplaza con tu cadena de conexión

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
  })
  .catch((error) => {
    console.error('Error de conexión a la base de datos:', error);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas para la entidad Habitación
const habitacionRoutes = require('./routes/habitacion');
app.use('/api/habitaciones', habitacionRoutes);

app.listen(port, () => {
  console.log(`Servidor en funcionamiento en el puerto ${port}`);
});
