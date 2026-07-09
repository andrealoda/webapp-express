const express = require('express');
const app = express();
const port = process.env.API_SERVER_PORT || 3000;
const routes = require('./routers/routes');

// importo i middleware
const notFound = require('./middlewares/notFound');
const serverError = require('./middlewares/serverError');


const cors = require("cors");

app.use(express.static('public'));

app.use(express.json()); // per poter leggere il body delle richieste in formato JSON

app.use(cors({
  origin: process.env.FRONTEND_SERVER_PORT || "http://localhost:5173"
}));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/movies', routes); // al momento scelgo di utilizzare rotte semplici, senza /api/v1/...
app.use(notFound);
app.use(serverError);

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
