const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
// bring in the database connection method
const connectDB = require('./config/db');

// load the config file
dotenv.config({ path: './config/config.env' });

// route files
const bootcamps = require('./routes/bootcamps');

// connect to the database
connectDB();

// create the app variable from express
const app = express();

// dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// mount the router to the specific route files
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 4040;

const server = app.listen(PORT, () => {
  console.log(
    'Server running in ' + `${process.env.NODE_ENV}`.rainbow.bold + ' mode.'
  );
  console.log(
    'Server listening on port ' +
      `http://localhost:${PORT}`.yellow.bold.underline +
      '.'
  );
});

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log('Error: '.red.bold + `${err.message}`.red);
  // close the server connection and exit process with failure flag (1)
  server.close(() => process.exit(1));
});
