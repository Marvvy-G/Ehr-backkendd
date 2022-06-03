const router = require("express").Router();
const { query } = require("express");
const labProduct = require("../models/labProducts");

//CREATE
router.post("/lab", async(req, res) =>{
    const newlabProduct = new labProduct(req.body)

try{
    const savedlabProduct =await newlabProduct.save();
    res.redirect("/api/labproducts/lab")
} catch(err){
    console.log(err)
};
});

// //UPDATE a PRODUCTS
router.put("/:id", async (req, res) => {
    try {
        const updatedlabProduct = await labProduct.findByIdAndUpdate(
            req.params.id, {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedlabProduct); 
    } catch(err){
        res.status(500).json(err);
    } return;
});

//DELETE
router.delete("/:id", async(req, res) => {
    try{
        await labProduct.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    } catch(err){
        res.status(500).json(err)
    }
});


//GET SELECTED PRODUCT
router.get("/lab/find/:id", async(req, res) => {
    try{
        const labProduct = await labProduct.findById(req.params.id);
        res.status(200).json(labProduct);
    } catch(err){
        res.status(500).json(err)
    }
});

// GET ALL PRODUCTS
router.get("/lab", async(req, res) => {
    const qNew = req.query.new;
    try{
        let labproducts;

        if(qNew){
            labproducts = await labProduct.find().sort({createdAt: -1}).limit(5)
        } else 
         {
            labproducts = await labProduct.find();
        }
        res.render("lab", {labProduct:labproducts});
    } catch(err){
        res.status(500).json(err)
    }
});

// //GET USER STATS
// router.get("/stats", verifyTokenAndAdmin, async(req, res) => {
//     const date = new Date();
//     const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

//     try{
//         const data = await user.aggregate([
//             {$match: {createdAt: { $gte: lastYear} }},
//             {
//                 $project:{
//                     month: {$month: "$createdAt"},
//                 },
//             },
//             {$group:{
//                 _id: "$month",
//                 total: {$sum: 1}, 
//             }}
//         ]);
//         res.status(200).json(data)
//     } catch(err) {
//         res.status(500).json(err);
//         }
// });


module.exports = router;