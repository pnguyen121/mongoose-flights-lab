// const { create } = require('../models/flight')
const Flight = require('../models/flight')

const Ticket = require('../models/ticket')


module.exports = {
    new: newTicket,
    create,
    addTicketsToFlight
}

async function addTicketsToFlight(req, res){
    try{
        const flightDoc = await Flight.findById(req.params.id)
        
        

    } catch(err){


    }
}

async function create (req, res){
    console.log('YOOOOOOOO')
    console.log(req.params.id)
    // set the flight equal to the flight ID which is req.params.id
    req.body.flight = req.params.id
    try {
        console.log('is this working')
        console.log(req.body)

    const ticketDoc = await Ticket.create(req.body)
        console.log(ticketDoc)

        res.redirect(`/flights/${req.params.id}`)

    } catch(err){
        console.log(err)
        res.send('Something is wrong check termina')
    }
}



function newTicket (req,res){
    res.render('tickets/new', {flight: req.params.id})
}

// req.body.flight = 