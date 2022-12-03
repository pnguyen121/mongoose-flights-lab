const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets')

// render new ticket page
router.get('/flights/:id/tickets/new', ticketsCtrl.new)

// associate a ticket with a flight
router.post('/flights/:id/tickets', ticketsCtrl.create)

// show all of the ticketss on flight detail page
router.post('/flights/:id/tickets', ticketsCtrl.addTicketsToFlight)




module.exports = router;