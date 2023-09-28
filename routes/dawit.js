const express = require ('express')
const dawit = express.Router()

dawit.get('/dawit/:id', (req,res) => {
    const id = req.params.id; 
    console.log(id);

    res.send(id);
});
module.exports = dawit; 

