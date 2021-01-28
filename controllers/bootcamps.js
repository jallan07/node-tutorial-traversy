// @desc        get all bootcamps
// @method      GET
// @route       /api/v1/bootcamps
// @access      public
exports.getAllBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc        get a single bootcamps
// @method      GET
// @route       /api/v1/bootcamps/:id
// @access      public
exports.getOneBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show bootcamps: ${req.params.id}` });
};

// @desc        create a bootcamp
// @method      POST
// @route       /api/v1/bootcamps/
// @access      private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: `Create a new bootcamp` });
};

// @desc        Update a bootcamp
// @method      PUT
// @route       api/v1/bootcamps/:id
// @access      private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp: ${req.params.id}` });
};

// @desc        Delete a bootcamp
// @method      DELETE
// @route       /api/v1/bootcamps/:id
// @access      private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp: ${req.params.id}` });
};
