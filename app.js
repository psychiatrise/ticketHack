require('dotenv').config();
require('./models/connection');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var tripsRouter = require('./routes/trips');
<<<<<<< HEAD
var cors = require('cors');
=======
var bookingRouter = require('./routes/bookings');

>>>>>>> f691769af26af8676c2916d624b17afea04fb401
var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/trips',tripsRouter);
app.use('/bookings', bookingRouter);

module.exports = app;
