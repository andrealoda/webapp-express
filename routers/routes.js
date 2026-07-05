const express = require('express');
const router = express.Router();
const connection = require('../data/db_connection');

//INDEX ROUTE
router.get('/movies', (req, res) => {
    const query = 'SELECT * FROM movies';
    connection.query(query, (err, results) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ error: 'Errore nel recupero delle informazioni sui film' });
        }
        res.json(results);
    });
});

//SHOW ROUTE
router.get('/movies/:id', (req, res) => {
    const movieId = req.params.id;
    const query = 'SELECT * FROM movies WHERE id = ?';
    connection.query(query, [movieId], (err, results) => {
        if (err) return res.status(500).json({ error: 'Errore nel recupero delle informazioni sul film scelto' });
        if (results.length === 0) return res.status(404).json({ error: 'Film non trovato' });
        res.json(results);
    });
});

module.exports = router;