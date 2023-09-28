const express = require('express')
const user = express.Router()

// Use bodyParser middleware to parse JSON request bodies
user.use(express.json());

user.post('/getuser', (req, res) => {
  // Get the data sent in the request payload
  const userData = req.body;
  
  // Send the same data as the response
  res.json(userData);
});

module.exports = user; 