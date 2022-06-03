const router = require("express").Router();
const{ verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } 
        = require("./verifyToken");
   
const
products = require("../models/products"),
Patient = require("../models/patients")


router.get("/showpatients", async (req, res) => {
    //Get all patients
    try{
        const Patient = await Patient.find();
        res.status(500).json(Patient);
    } catch(err){
        res.status(200).json(err);
    }
});

router.get("/showpatients/:id", verifyTokenAndAuthorization, function(req, res){
  Patient.findById(req.params.id).populate("vital").exec(function(err, patient){
        if (err){ 
            console.log(err);
        } else {
             products.find({}, (err, products)=>{
              if (err){
                res.status(200).json(err);
              } else {
                res.status(500).json(Patient);
               
              }
          });
        }
    });
  });

module.exports = router