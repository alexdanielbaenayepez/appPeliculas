var express = require('express');
var router = express.Router();
var {getUser, createUser, deleteUser} = require('../controllers/user.controller.js');
var {getDirector, updateDirector, deleteDirector, createDirector, getDirectorById} = require('../controllers/director.js');
var {getGeneroById, getGeneros, updateGenero, deleteGenero, createGenero} = require('../controllers/generos.js');
var {getMedia, createMedia,getMediaById} = require('../controllers/media.js');
var {getProductoras, updateProductora, deleteProductora, createProductora, getProductoraById} = require('../controllers/productora.js');
var {getTipos, updateTipo, deleteTipo, createTipo} = require('../controllers/tipo.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/user', getUser)
router.post('/crearuser', createUser)
router.delete('/eliminaruser', deleteUser);

// Director
router.get('/directorById', getDirectorById)
router.get('/director', getDirector);
router.post('/creardirector', createDirector);
router.put('/actualizardirector', updateDirector);
router.delete('/eliminardirector', deleteDirector);

// Generos
router.get('/genero', getGeneros);
router.get('/genero/:id', getGeneroById);
router.post('/creargenero', createGenero);
router.put('/actualizargenero', updateGenero);
router.delete('/eliminargenero', deleteGenero);

// Media
router.get('/media', getMedia);
router.post('/crearmedia', createMedia);
router.get('/media/:id', getMediaById);

// Productoras
router.get('/productora', getProductoras);
router.get('/productora/:id', getProductoraById);
router.post('/crearproductora', createProductora);
router.put('/actualizarproductora', updateProductora);
router.delete('/eliminarproductora', deleteProductora);

// Tipos
router.get('/tipo', getTipos);
router.post('/creartipo', createTipo);
router.put('/actualizartipo', updateTipo);
router.delete('/eliminartipo', deleteTipo);

module.exports = router;