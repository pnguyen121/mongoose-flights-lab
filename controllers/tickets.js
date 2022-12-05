// const { create } = require('../models/flight')
const Flight = require('../models/flight')

const Ticket = require('../models/ticket')


module.exports = {
    new: newTicket,
    create,
    delete: deleteTicket
}

async function deleteTicket (req, res){
    console.log('DELETE TICKET OR SOMETHING')
    console.log(req.params.id, 'FIRST REQ PARAM')
    try {
        console.log('deleteFunction doing something')
        console.log('req.params.id')

        const ticketDoc = await Ticket.findByIdAndDelete(req.params.id)

        res.redirect(`/flights/${ticketDoc.flight}`)
    } catch(err){
        console.log(err)
        res.send('Something wrong w deleteTicket function check term')
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

        res.redirect(`/flights`)

    } catch(err){
        console.log(err)
        res.send('Something is wrong check termina')
    }
}



function newTicket (req,res){
    res.render('tickets/new', {flight: req.params.id, })
}

// req.body.flight = 