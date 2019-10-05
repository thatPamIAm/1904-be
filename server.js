const express = require('express');
const cors = require('cors');
const app = express();


app.locals.food = [
  { id: 1, item: 'banana'},
  { id: 2, item: 'apple' },
  { id: 3, item: 'mango'}
]

app.set('port', process.env.PORT || 3001);

app.get('/', (request, response) => {
  response.send('Everything is up and running!');
});

app.get('/api/v1/snacks', cors(), (request, response) => {
  const food = app.locals.food;
  
  response.status(200).send({ food }); 
});

app.listen(app.get('port'), () => {
  console.log(`App is listening on port ${app.get('port')}`);
});