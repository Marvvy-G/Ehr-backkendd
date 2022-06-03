const router = require("express").Router();
//Models
const
vital = require("../models/vital"),
visit = require("../models/visit"),
Patient = require("../models/patients")


router.get("/nurse/:id", function(req, res){
    Patient.findById(req.params.id, function(err, foundPatient){
        if(err){
            console.log(err);
        } else {
    // show specific patient within the doctors page
    res.status(500).json(Patient);
        }
    
})
});

router.post("/visit/:id", function(req, res){
    Patient.findById(req.params.id, function(err, patient){
        if (err){
            console.log(err);
        } else {
            vital.create(req.body.vital, function(err, vital){
                if (err){
                    console.log(err)
                } else {
                    patient.vital.push(vital);
                    patient.save();
                    res.status(500).json(vital)
                }
            })
        }
    })
})

router.get("/visit/:id", function(req, res){ 
    Patient.findById(req.params.id).populate("visit", "vital").exec(function(err, patient){
        if(err){
            console.log(err);}
            else {
           res.status(500).json(visit);
        }
    });
});


router.post("/visit/:id", function(req, res){
    vital.findById(req.params.id, function(err, patient){
        if(err){
            console.log(err);
            res.status(200).json("redirect to index");
        } else {
            visit.create(req.body.visit, function(err, visit){
                if (err){
                    console.log(err);
                }   else 
                {
                   vital.visit.push(visit);
                   vital.save();
                   res.status(500).json(visit);
                  
                }
            });
        }

    });
});

module.exports = router;
