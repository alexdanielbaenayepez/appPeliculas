const { model} = require('mongoose')
const mongoose = require("mongoose");

const Tipo = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },

  fechaCreacion: {
    type: Date,
    required: true
  },
  fechaActualizacion:{
    type: Date,
    required: true
  },

  descripcion:{
    type: String,
    required: true
  }
})

module.exports = model('moduloTipo', Tipo)