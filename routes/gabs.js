const express = require('express');
const router = express.Router();
const fs = require('fs');
const madGabsEasyPath = './data/madGabsEasy.json';
const madGabsMediumPath = './data/madGabsMedium.json';
const madGabsHardPath = './data/madGabsHard.json';


// get easy gabs route
router.route('/easy')
  .get((req, res) => {
    fs.readFile(madGabsEasyPath, (err, data) => {
      try {
        const madGabsEasyData = JSON.parse(data);
        res.json(madGabsEasyData);
        
        console.log("easy")
      } catch (error) {
      console.error(error);
    }
  })
});

// get medium gabs route
router.route('/medium')
  .get((req, res) => {
  fs.readFile(madGabsMediumPath, (err, data) => {
    try {
      const madGabsMediumPath = JSON.parse(data);
      res.json(madGabsMediumPath);
      
    } catch (error) {
      console.error(error);
    }
  })
});

// get hard gabs route
router.route('/hard')
  .get((req, res) => {
  fs.readFile(madGabsHardPath, (err, data) => {
    try {
      const madGabsHardPath = JSON.parse(data);
      res.json(madGabsHardPath);
      
    } catch (error) {
      console.error(error);
    }
  })
});


module.exports = {
  router
}
