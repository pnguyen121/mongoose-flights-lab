// require in the model so we can talk to the database
const Flight = require('../models/flight')


module.exports = {
    create,
}


function create(req, res){

    Flight.findById(req.params.id, function(err, flightDoc){

        flightDoc.destinations.push(req.body)
        flightDoc.save(function(err){

            console.log(req.body)


            res.redirect(`/flights/${req.params.id}`)
        })

    })
    

}