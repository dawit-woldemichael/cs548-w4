const express = require('express')

const startup = express.Router()

startup.get('/', (req, res) => {
    res.send('It works!')
})

startup.get('/startup', (req, res) => {
    res.send('Web Service has started!');
});  

module.exports =  startup;