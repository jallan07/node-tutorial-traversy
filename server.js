const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
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
    `Server running in a ${process.env.NODE_ENV} environment, and listening on port http://localhost:${PORT}.`
  );
});

// handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`);
  // close the server connection and exit process with failure flag (1)
  server.close(() => process.exit(1));
});
