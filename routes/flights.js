

const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights')


// create form for a new post using GET
router.get('/new', flightsCtrl.new)

// get all of the posts
router.get('/', flightsCtrl.index)


// show the details of the flight
router.get('/:id', flightsCtrl.show)


// create and POST the post into the database
router.post('/', flightsCtrl.create)




module.exports = router;
