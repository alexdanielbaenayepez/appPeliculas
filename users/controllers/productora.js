const Productora = require('../models/moduloProductora');

// Obtener todas las productoras
const getProductoras = async (req, res) => {
  try {
    const productoras = await Productora.find();
    res.json(productoras);
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
};



// Crear una nueva productora
const createProductora = async (req, res) => {
  const { nombre, slogan, descripcion } = req.body;
  const nuevaProductora = new Productora({
    nombre,
    slogan,
    descripcion,
  });

  try {
    const productora = await nuevaProductora.save();
    res.status(201).json(productora);
  } catch (err) {
    res.status(400).json({ mensaje: err.message });
  }
};

// Actualizar una productora
const updateProductora = async (req, res) => {
  const { nombre, slogan, descripcion } = req.body;

  try {
    res.productora.nombre = nombre;
    res.productora.slogan = slogan;
    res.productora.descripcion = descripcion;
    const productoraActualizada = await res.productora.save();
    res.json(productoraActualizada);
  } catch (err) {
    res.status(400).json({ mensaje: err.message });
  }
};

// Eliminar una productora
const deleteProductora = async (req, res) => {
  try {
    const id = req.params.id;
    await res.productora.remove(id);
    res.json({ mensaje: 'Productora eliminada' });
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
};

// Middleware para obtener una productora por ID
const getProductoraById = async (req, res)=> {
  let productora;
  try {
    productora = await Productora.findById(req.params.id);
    if (productora == null) {
      return res.status(404).json({ mensaje: 'Productora no encontrada' });
    }
  } catch (err) {
    return res.status(500).json({ mensaje: err.message });
  }

  res.productora = productora;
}

module.exports = {
  getProductoras,
  createProductora,
  updateProductora,
  deleteProductora,
  getProductoraById
}