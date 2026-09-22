var express = require('express');
var router = express.Router();
const Trip = require('../models/trips');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req,res,next){
    if(req.body.departure && req.body.arrival){
           Trip.find({
            departure:req.body.departure,
            arrival: req.body.arrival
          })
           .then(data => {
            console.log(data);
            res.json({Trips: data});
           })
      
      
      
     // res.json({result: true, error: "En construction"})

    }else{
      res.json({result: false, error: "missing field"})
    }
})

module.exports = router;
