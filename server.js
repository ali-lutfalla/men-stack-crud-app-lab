const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const methodOverride = require('method-override');

// Database
require('./config/database.js');

const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

// Controllers
const carsCtrl = require('./controllers/cars.js');

//Routes
app.get('/', carsCtrl.home);

app.get('/cars/new',carsCtrl.new);

app.post('/cars',carsCtrl.create);

app.get('/cars',carsCtrl.index);

app.get('/cars/:id', carsCtrl.show);

app.delete('/cars/:id',carsCtrl.destroy);

app.get('/cars/:id/edit',carsCtrl.edit);

app.put('/cars/:id',carsCtrl.update);

app.listen(3000, () => {
    console.log("Listening on port 3000");
  });
