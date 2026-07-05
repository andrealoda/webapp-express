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

module.exports = router;