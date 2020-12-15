const express = require('express')
//const router = express.Router();
const router = require('express-promise-router')(); //agis comme une global autoCatch ce qui permet de reduire le nombre de ligne en controller.

const USERController = require('../controllers/User.Controller.js');

//-------------/users/
router.route('/')
    .get(USERController.get_users)
    .post(USERController.create_user)

//-------------/users/:userId/
router.route('/:userId')
    .get(USERController.get_userByID)
    .put(USERController.replace_userById)
    .delete(USERController.delete_userByID)
    .patch(USERController.update_userByID)
//------------/users/:userId/posts
router.route('/:userId/posts')
    .get(USERController.get_userPosts)
    .post(USERController.create_userPost)

module.exports = router;