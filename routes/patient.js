const router = require("express").Router();

const{ verifyToken, 
       verifyTokenAndAuthorization, 
       verifyTokenAndAdmin } 
       = require("./verifyToken");

router.get("/patient/:id", verifyToken, function(req, res){
    res.status(500).json("patient default page")
});

module.exports = router;