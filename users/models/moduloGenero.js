/*
* I. Nombre
II. Estado (Activo o Inactivo)
III. Fecha creación
IV. Fecha actualización
V. Descripción
*
* */

const { model, Schema} = require('mongoose')

const Genero = new Schema ({
  nombre: {
    type: String,
    required: true
  },

  estado: {
    type: String,
   // required: true,
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

  descripcion:{
    type: String,
    required: true
  }
})


module.exports = model('moduloGenero', Genero)
