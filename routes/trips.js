
const express = require('express');
const router = express.Router();
const Trip = require('../models/trips');

router.post('/', function(req,res,next){
    if(req.body.departure && req.body.arrival && req.body.date){
           Trip.find({
            departure:req.body.departure,
            arrival: req.body.arrival,
            date: req.body.date
          })
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