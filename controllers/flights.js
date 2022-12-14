// require in the model so we can talk to the database
const Flight = require('../models/flight')

const Ticket = require('../models/ticket')


module.exports = {
    new: newFlight,
    create,
    index,
    show
}


// function to show each individuall flight when clicking on details
function show(req, res){

    Flight.findById(req.params.id, function(err, flightDoc){

        Ticket.find({flight: flightDoc._id}, function(err, ticketDocs){


            console.log(req.body, 'REQ.BODY')
            console.log(flightDoc, 'FLIGHT DOC')
            console.log(ticketDocs, 'TICKETDOS')
            console.log(req.params.id)
            console.log(ticketDocs[1]._id)
            res.render('flights/show',{flight: flightDoc, ticket: ticketDocs})
        })
    })
}

// Add all of the flights in the DB to the flights page
function index(req, res){
    // Grab every flight in the DB
    Flight.find({}, function(err, flightsDoc){
        console.log(flightsDoc)
       
        // render it to the ejs and exporting flights out
        res.render('flights', {flights: flightsDoc})
    })

}


function create(req, res){
    console.log(req.body)
    Flight.create(req.body, function(err, flightDoc){
        if(err){
            console.log(err)
            return res.send('check terminal somethings wrong')
        }
        console.log('============ below goes into DB')
        console.log(flightDoc)

        res.redirect('flights')
    })
}


function newFlight (req, res){
    res.render('flights/new')
}

// function index (req, res){
//     res.render('')
// }