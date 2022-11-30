// require in the model so we can talk to the database
const Flight = require('../models/flight')


module.exports = {
    new: newFlight,
    create,
    index
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