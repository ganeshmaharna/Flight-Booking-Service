const express = require('express');

const { InfoController } = require('../../controllers');

const bookingRouter= require('./booking-routes');
const router = express.Router();

router.use("/bookings",bookingRouter);

router.get('/info', InfoController.info);


module.exports = router;