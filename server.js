const express = require('express');
const dotenv = require('dotenv');

// load the config file
dotenv.config({ path: './config/config.env' });

const app = express();

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  console.log(
    `Server running in a ${process.env.NODE_ENV} environment, and listening on port http://localhost:${PORT}.`
  );
});
