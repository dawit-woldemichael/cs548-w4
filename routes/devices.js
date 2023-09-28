const express = require('express')
const device = express.Router()

device.get('/get-device', (req, res) => {
  const whatDeviceIsThis = req.header('User-Agent');
  const response = {
    isWindows: whatDeviceIsThis.includes('Windows'),
    isMac: whatDeviceIsThis.includes('Macintosh'),
    isLinux: whatDeviceIsThis.includes('Linux'),
    postmanRunTime: whatDeviceIsThis.includes('PostmanRuntime'),
  };

  res.json(response);
});

module.exports = device; 
  
