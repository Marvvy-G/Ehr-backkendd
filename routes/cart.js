const router = require("express").Router();
const { query } = require("express");
const Product = require("../models/products");
const Cart = require("../models/cart")
const{  verifyToken, 
        verifyTokenAndAuthorization, 
        verifyTokenAndAdmin 
    } = require("./verifyToken");

//CREATE
router.post("/doctor/showpatients/:id", verifyToken, async(req, res) =>{
    const newCart = new Cart(req.body)

try{
    const savedCart =await new Cart.save();
    res.status(200).json(savedCart)
} catch(err){
    res.status(500).json(err)
}
})

//UPDATE a PRODUCTS
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(
            req.params.id, 
            {
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCart); 
    } catch(err){
        res.status(500).json(err);
    } return;
});

//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async(req, res) => {
    try{
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Product has been deleted...")
    } catch(err){
        res.status(500).json(err)
    }
});


//GET USER CART
router.get("/find/:userId", verifyTokenAndAuthorization, async (req, res) => {
    try{
        const cart = await Cart.findOne({userId: req.params.userId});
        res.status(200).json(cart);
    } catch(err){
        res.status(500).json(err)
    }
});

// GET ALL Carts
router.get("/", verifyTokenAndAdmin, async(req, res) => {
    try{
        const cart = await Cart.find();    
        res.status(200).json(cart);
    } catch(err){
        res.status(500).json(err)
    }
});

module.exports = router;