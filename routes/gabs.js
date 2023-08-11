const express = require('express');
const router = express.Router();
const fs = require('fs');
const videosFilePath = './data/videos.json';
const madGabsEasyPath = './data/madGabsEasy.json';
const madGabsMediumPath = './data/madGabsMedium.json';
const madGabsHardPath = './data/madGabsHard.json';
const { v4: uuidv4 } = require('uuid');


// get videos request
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

// get videos request
router.route('/medium')
  .get((req, res) => {
    console.log("medium")
  fs.readFile(madGabsMediumPath, (err, data) => {
    try {
      const madGabsMediumPath = JSON.parse(data);
      res.json(madGabsMediumPath);
      
    } catch (error) {
      console.error(error);
    }
  })
});

// get videos request
router.route('/hard')
  .get((req, res) => {
    console.log("hard")
  fs.readFile(madGabsHardPath, (err, data) => {
    try {
      const madGabsHardPath = JSON.parse(data);
      res.json(madGabsHardPath);
      
    } catch (error) {
      console.error(error);
    }
  })
});



// router.route('/:id')
// get video details
  // .get((req, res) => {
  
//   const requestedId = req.params.id; 
  
//   fs.readFile(videosFilePath, (err, data) => {

//       const requestedVideo = JSON.parse(data).find(video => video.id === requestedId);
      
//     if (!requestedVideo) {
//       return res.status(404).json({ error: 'Video not found' });
//     }
//     res.json(requestedVideo);
//   })
//   // post comments on a video
// })
// router.post('/:id/comments', (req, res) => {
//   const requestedId = req.params.id; 
//   const newComment = req.body;

  
//   fs.readFile(videosFilePath, (err, data) => {
       
//     try {
//       const videos = JSON.parse(data);

//       const requestedVideo = videos.find(video => video.id === requestedId);

//       if (!requestedVideo) {
//         return res.status(404).json({ error: 'Video not found' });
//       }

//       if (!requestedVideo.comments) {
//         requestedVideo.comments = [];
//       }
//       requestedVideo.comments.push(newComment);

//       // Write the updated data back to the JSON file
//       fs.writeFile(videosFilePath, JSON.stringify(videos, null, 2), err => {
//         if (err) {
//           console.error('Error writing videos.json:', err);
//           return res.status(500).json({ error: 'Internal server error' });
//         }

//         res.json({ message: 'Comment added successfully', video: requestedVideo });
//       });

//     } catch (parseError) {
//       console.error('Error parsing JSON:', parseError);
//       res.status(500).json({ error: 'Error parsing JSON' });
//     }
//   });
// });



module.exports = {
  router
}
