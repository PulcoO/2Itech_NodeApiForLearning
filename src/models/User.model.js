const mongoose = require('mongoose');


const User = mongoose.model('User',
    new mongoose.Schema(
        {
            firstname: {
                type: String,
                required: 'Enter a Firstname please'
            },
            lastname: {
                type: String,
                required: 'Enter a Lastname please'
            },
            email: String,
            compagny: String,
            phone: Number,
            message: String,
            posts:[
                {
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"Post"
                }
            ],
            _createdAt: {
                type: Date,
                default: Date.now
            }
        }
    )
) 
exports.Models = User;