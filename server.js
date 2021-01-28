const express = require('express');
const dotenv = require('dotenv');

// route files
const bootcamps = require('./routes/bootcamps');

// load the config file
dotenv.config({ path: './config/config.env' });

const app = express();

// mount the router to the specific route files
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  console.log(
    `Server running in a ${process.env.NODE_ENV} environment, and listening on port http://localhost:${PORT}.`
  );
});
