const express = require('express');
const router = express.Router();
const connection = require('../data/db_connection');
const routesController = require('../controllers/routesController');


//INDEX ROUTE
router.get('/movies', routesController.getAllMovies);

//SHOW ROUTE
router.get('/movies/:id', routesController.getMovieById);

module.exports = router;