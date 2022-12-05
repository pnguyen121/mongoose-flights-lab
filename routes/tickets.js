const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets')

// render new ticket page
router.get('/flights/:id/tickets/new', ticketsCtrl.new)

// associate a ticket with a flight
router.post('/flights/:id/tickets', ticketsCtrl.create)


// delete a certain ticket route
router.delete('/tickets/:id', ticketsCtrl.delete)


module.exports = router;