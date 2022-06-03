const router = require("express").Router();
const
order = require("../models/order"),
Patient = require("../models/patients")
const{ 
    verifyToken,
    verifyTokenAndAuthorization, 
    verifyTokenAndAdmin } 
    = require("./verifyToken");

router.get("/showpatients", function(req, res){
    //get patients for pharmacist
    Patient.find({}, function(err, allPatients){
        if(err){
            res.status(200).json(err);
        }    else {
            res.status(500).json(Patient);
        }
        });
});


router.get("/showpatients/:id",function(req, res){
    Patient.findById(req.params.id, function(err, patient){
        if (err){ 
            console.log(err);
        } else {
          order.findOne({name:daclofenac}, (err, order)=>{
              if (err){
                  console.log(err);
              } else {
                  res.status(500).json(patient)
                  console.log(order)
              }
          });
        }
    });
});

module.exports = router