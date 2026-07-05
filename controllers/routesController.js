const connection = require('../data/db_connection');

const routesController = {
    // INDEX ROUTE

    getAllMovies: (req, res) => {
        const query = 'SELECT * FROM movies';
        connection.query(query, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: 'Errore nel recupero delle informazioni sui film' });
            }
            res.json(results);
        });
    },

    // SHOW ROUTE
    getMovieById: (req, res) => {
        const movieId = req.params.id;
        const query = 'SELECT * FROM movies WHERE id = ?';
        connection.query(query, [movieId], (err, results) => {
            if (err) return res.status(500).json({ error: 'Errore nel recupero delle informazioni sul film scelto' });
            if (results.length === 0) return res.status(404).json({ error: 'Film non trovato' });
            res.json(results);
        });
    },



}


module.exports = routesController;