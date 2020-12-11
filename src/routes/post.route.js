const express = require('express')
//const router = express.Router();
const router = require('express-promise-router')(); //agis comme une global autoCatch ce qui permet de reduire le nombre de ligne en controller.

const POSTController = require('../controllers/Post.Controller.js');

// -------------/posts/
router.route('/')
    .get(POSTController.get_posts)

// -------------/posts/:postId/
router.route('/:postId')
    .get(POSTController.get_postById)

module.exports = router;