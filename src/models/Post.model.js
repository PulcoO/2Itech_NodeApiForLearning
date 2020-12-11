const mongoose = require("mongoose");

const Post = mongoose.model('Post',
  new mongoose.Schema({
    title:{
      type:String
    },
    subtitle :{
      type: String
    },
    author :{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
    }
  })
);

module.exports.Models = Post;