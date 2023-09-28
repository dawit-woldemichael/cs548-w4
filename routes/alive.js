const express = require ('express')
const alive = express.Router()

alive.get('/alive', (req, res) => {
    res.send('Its alive!')
})
module.exports = alive;