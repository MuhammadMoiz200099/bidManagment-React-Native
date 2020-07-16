const app = require('express')();
const http = require('http').createServer(app);

app.get('/', (req, res) => {
  res.send('<h1>Server Started on Port:3000, Bids Prog</h1>');
});

http.listen(3000, () => {
  console.log('Server Started on Port:3000');
});
