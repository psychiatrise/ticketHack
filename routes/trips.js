
const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');

router.post('/', function(req,res,next){
    if(req.body.departure && req.body.arrival && req.body.date){
      const departure = req.body.departure.charAt(0).toUpperCase() + req.body.departure.slice(1);
      const arrival = req.body.arrival.charAt(0).toUpperCase() + req.body.arrival.slice(1);
           Trip.find({
            departure:departure,
            arrival: arrival,
            date: req.body.date
          })
          .sort('heure')
           .then(data => {
            //console.log(data);
            res.json({Trips: data});
           })   
     // res.json({result: true, error: "En construction"
    }else{
      res.json({result: false, error: "missing field"})
    }
})


module.exports =  router ;