const Media = require('../models/moduloMedia');
const Genero = require('../models/moduloGenero');
const Director = require('../models/moduloDirector');
const Productora = require('../models/moduloProductora');
const Tipo = require('../models/moduloTipo');

// Obtener todas las medias
const getMedia = async (req, res) => {
  try {
    const medias = await Media.find()
        .populate('genero')
        .populate('director')
        .populate('productora')
        .populate('tipo');
    res.json(medias);
  } catch (err) {
    res.status(500).json({ mensaje: err.message });
  }
};

// Crear una nueva media
const createMedia = async (req, res) => {
  const { serial, titulo, sinopsis, urlPelicula, portada, anioEstreno, genero, director, productora, tipo } = req.body;

  const generoObj = await Genero.findById(genero);
  const directorObj = await Director.findById(director);
  const productoraObj = await Productora.findById(productora);
  const tipoObj = await Tipo.findById(tipo);

  if (!generoObj || !directorObj || !productoraObj || !tipoObj) {
    return res.status(400).json({ mensaje: 'Uno o más campos relacionados no encontrados' });
  }
  const nuevaMedia = new Media({
    serial,
    titulo,
    sinopsis,
    urlPelicula,
    portada,
    anioEstreno,
    genero,
    director,
    productora,
    tipo,
  });

  try {
    const media = await nuevaMedia.save();
    res.status(201).json(media);
  } catch (err) {
    res.status(400).json({ mensaje: err.message });
  }
};
// Middleware para obtener una media por ID
const getMediaById= async (req, res, next)=> {
  let media;
  try {
    media = await Media.findById(req.params.id)
        .populate('genero')
        .populate('director')
        .populate('productora')
        .populate('tipo');
    if (media == null) {
      return res.status(404).json({ mensaje: 'Media no encontrada' });
    }
  } catch (err) {
    return res.status(500).json({ mensaje: err.message });
  }

  res.media = media;
  next();
}

module.exports = {
  createMedia,
  getMedia,
  getMediaById
}