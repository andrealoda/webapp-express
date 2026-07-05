const express = require('express');
const app = express();
const port = process.env.API_SERVER_PORT || 3000;

const routes = require('./routers/routes');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.use('/', routes); // al momento scelgo di utilizzare rotte semplici, senza /api/v1/...

app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});