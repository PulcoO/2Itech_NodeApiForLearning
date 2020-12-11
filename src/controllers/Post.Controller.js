const mongoose = require('mongoose');
// MODELS    ---------------------------------
const User = require('../models/User.model').Models;
const Post = require('../models/Post.model').Models;

module.exports = {
    //get all posts
    get_posts : async (req,res, next) => {
        const posts = await Post.find({}).populate('author');
        res.status(200).json(posts)
    },
    //get one post by id
    get_postById : async (req,res, next) => {
        const {postId} = req.params;
        const posts = await Post.findById(postId).populate('author')
        res.status(200).json(posts)
    }
}

