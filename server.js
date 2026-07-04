const express = require('express');
const app = express();
const port = process.env.API_SERVER_PORT;


app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});