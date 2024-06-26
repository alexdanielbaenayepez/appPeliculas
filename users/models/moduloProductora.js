/*
* I. Nombre de la productora
II. Estado (Activo o Inactivo)
III. Fecha de creación
IV. Fecha de actualización
V. Slogan
VI. Descripción
* */

const { model} = require('mongoose')
const mongoose = require("mongoose");

const Productora = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },

  estado: {
    type: String,
    required: true,
    enum:[
      'activo', 'inactivo'
    ]
  },

  fechaCreacion: {
    type: Date,
    required: true
  },
  fechaActualizacion:{
    type: Date,
    required: true
  },

  slogan:{
    type: String,
    required: true
  },

  descripcion:{
    type: String,
    required: true
  }
})

module.exports = model('moduloProductora', Productora)