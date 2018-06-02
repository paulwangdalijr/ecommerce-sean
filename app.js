var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var authRouter = require('./routes/auth');
var productRouter = require('./routes/product')(authRouter);

const database = require('./config/database');
// var usersRouter = require('./routes/users');

var app = express();
const cors = require('cors');
const passport = require('passport');
const social = require('./passport/passport')(app, passport);
const session = require('express-session');


// database.serialize();
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(session(secret: 'cat', 
//         saveUninitialized: true,
//         resave: true));

app.use(express.static(path.join(__dirname, 'public'))); 
app.use('/img', express.static(path.join(__dirname, 'images'))); 

// // dev purposes
// // app.use(cors({
// //   origin: 'http://localhost:4200'
// // }));
// app.use(function(req, res, next) {
//   //set headers to allow cross origin request.
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//     res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-auth-token");
//     res.header('Access-Control-Allow-Credentials', 'true');
//     next();
// });
// // app.use(cors());

app.use('/auth', authRouter);
app.use('/api/product', productRouter)
app.use('', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.on('SIGINT', () => {
  database.close();
  app.close();
});
module.exports = app;
