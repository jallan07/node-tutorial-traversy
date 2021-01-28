const express = require('express');
// bring in the methods that we defined in the controllers/bootcamps.js file
const {
  getAllBootcamps,
  getOneBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp
} = require('../controllers/bootcamps');
const router = express.Router();

// the routes below access the route of /api/v1/bootcamps and then use a GET and POST request with the cooresponding methods defined from the controllers file
router.route('/').get(getAllBootcamps).post(createBootcamp);

// the routes below access the route of /api/v1/bootcamps/:id and then use a GET, PUT, and DELETE request with the cooresponding methods defined from the controllers file
router
  .route('/:id')
  .get(getOneBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

// the routes are then exported so that we can use them in the main server.js file
module.exports = router;
