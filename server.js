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


