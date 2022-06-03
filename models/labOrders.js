const mongoose = require("mongoose");

const labOrderSchema = new mongoose.Schema({
    testtype: {
        type: String,
        required: true,
    },
},
{
    timestamp: true 
});

module.exports = mongoose.model("labOrder", labOrderSchema)