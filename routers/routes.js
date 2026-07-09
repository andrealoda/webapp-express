const express = require('express');
const router = express.Router();
const routesController = require('../controllers/routesController');


//INDEX ROUTE
router.get('/', routesController.getAllMovies);

//SHOW ROUTE
router.get('/:id', routesController.getMovieById);

// STORE
router.post('/', routesController.store);

// STORE REVIEW
router.post('/:id/reviews', routesController.storeReview);

module.exports = router;