
const Genero = require('../models/moduloGenero');

// Obtener todos los géneros
const getGeneros = async (req, res) => {
  try {
    const generos = await Genero.find();
    res.json(generos);
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
};

// Crear un nuevo género
const createGenero = async (req, res) => {
  const nuevoGenero = new Genero({
    nombre: req.body.nombre,
    descripcion: req.body.descripcion,
  });

  try {
    const genero = await nuevoGenero.save();
    res.status(201).json(genero);
  } catch (err) {
    res.status(400).json({ mensaje: err.message });
  }
};

// Actualizar un género
const updateGenero = async (req, res) => {
  try {
    res.genero.nombre = req.body.nombre;
    res.genero.descripcion = req.body.descripcion;
    const generoActualizado = await res.genero.save();
    res.json(generoActualizado);
  } catch (err) {
    res.status(400).json({ mensaje: err.message });
  }
};

// Eliminar un género
const deleteGenero = async (req, res) => {
  try {
    await res.genero.remove();
    res.json({ mensaje: 'Género eliminado' });
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
};

// Middleware para obtener un género por ID
const getGeneroById= async(req, res, next)=> {
  let genero;
  try {
    genero = await Genero.findById(req.params.id);
    if (genero == null) {
      return res.status(404).json({ mensaje: 'Género no encontrado' });
    }
  } catch (err) {
    return res.status(500).json({ mensaje: err.message });
  }

  res.genero = genero;
  next();
}

module.exports = {
  getGeneros,
  createGenero,
  updateGenero,
  deleteGenero,
  getGeneroById
}