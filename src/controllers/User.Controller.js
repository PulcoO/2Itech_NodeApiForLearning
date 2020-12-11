const mongoose = require('mongoose');
// MODELS    ---------------------------------
const User = require('../models/User.model').Models;
const Post = require('../models/Post.model').Models;

module.exports = {
    //get all the users
    get_users : async (req, res, next) => {
        const users = await User.find({});
        //faire les verifications
        res.status(200).json(users)
        console.log('controller : get_users', user + ' with ID : ' + req.params.userId)
    },
    //get user by id
    get_userByID : async (req, res) => {
        const {userId} = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
        console.log('controller : get_userByID', user + ' with ID : ' + req.params.userId)
    },

    //create user
    create_user : async (req, res, next) => {
        const newUser = new User( req.body );
        const user = await newUser.save();
        res.status(200).json(user);
        console.log('controller : create_user', user);
    },
    //replace User
    replace_userById : async (req, res, next) => {
        //renforce the body to contain all the fields
        const {userId} = req.params;
        const newUser = req.body;

        const result = await User.findByIdAndUpdate(userId, newUser);
        console.log('controller : replace_user', newUser);
        res.status(200).json({success : true});

    },
    //update user
    update_userByID : async (req, res, next) => {
        //May contain any nombers of fields
        const { userId } = req.params;
        const newUser = req.body;

        const result = await User.findByIdAndUpdate(userId, newUser);
        console.log('controller : update_user', newUser);
        res.status(200).json({success : true});
    },
    //delete user
    delete_userByID : async (req, res, next) => {

        const {userId} = req.params;
        const user = await User.findByIdAndDelete( userId );
        console.log('controller : delete_user', user);
        res.status(200).json(user);
    },


    //---------------get user Post
    get_userPosts : async (req, res, next) => {
        const {userId} = req.params;
        const users = await User.findById(userId).populate('posts')
        //console.log('users : ', users);
        res.status(200).json(users.posts);
    },

    create_userPost : async (req, res, next) => {
        const {userId} = req.params;
        //create the new post
        const newPost = new Post(req.body);
        //console.log('newPost', newPost);
        //get user
        const user = await User.findById(userId);
        //console.log('userfind', user)
        //assign the user as the author of the post
        newPost.author = user;
        //save the post
        await newPost.save();
        // now add post to the user's selling array 'cars'
        user.posts.push(newPost);
        //save the user
        await user.save()
        res.status(201).json(newPost)
    }

}