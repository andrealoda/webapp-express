const connection = require('../data/db_connection');

// INDEX ROUTE
const index = (req, res) => {

    const sql = "SELECT * FROM movies";

    connection.query(sql, (err, results) => {
        if (err) {
            console.error("error fetching movies", err);
            return res.status(500).json({ error: true, message: "error fetching movies" });
        }
        res.json(results);
    });
};


// SHOW ROUTE
const show = (req, res) => {
    const id = parseInt(req.params.id);

    const sql = "SELECT * FROM movies WHERE id = ?";

    const reviewsSql = "SELECT id, text, vote, name FROM reviews WHERE movie_id = ?";

    connection.query(sql, [id], (err, results) => {
        if (err) {
            console.error("error fetching movies", err);
            return res.status(500).json({ error: true, message: "error fetching movie" });
        }
        if (results.length === 0) {
            return res.status(404).json({ error: true, message: "movie not found" });
        }

        const movie = results[0];

        connection.query(reviewsSql, [id], (err, reviews) => {
            if (err) {
                console.error("error fetching reviews", err);
                return res.status(500).json({ error: true, message: "error fetching reviews" });
            }

            movie.reviews = reviews;
            res.json(movie);
        });
    });
};


// store movie - for future implementation
const store = (req, res) => {
    res.status(501).json({ error: true, message: "not implemented" })
}

// store review - for future implementation
const storeReview = (req, res) => {
    const movieId = parseInt(req.params.id);
    console.log("Movie ID:", movieId);
    console.log("Request Body:", req.body); // Log the request body for debugging

    const sql = `INSERT INTO reviews (movie_id, name, vote, text) VALUES (?, ?, ?, ?)`;

    const { name, vote, text } = req.body; // Destructure the request body


    connection.query(sql, [movieId, name, vote, text], (err, result) => {
        if (err) {
            console.error("Error inserting review:", err);
            return res.status(500).json({ error: true, message: "internal server error" });
        }
        res.status(201).json({ message: "review added", reviewId: result.insertId });
    }

)};


module.exports = {
    index,
    show,
    store,
    storeReview
}