const mongoose = require('mongoose');
// MODELS    ---------------------------------
const Role = require('../models/Post.model').Models;

//get Role
exports.get_roles = (req, res) => {
    
    Role.find( {} , (err, elements) => { // {} filtre de recherche
        if(err) res.send(err);
        res.json(elements);
        console.log('controller : get_role', elements)
    })
}
//create role
exports.create_role = (req, res) => {
    const newRole = new Role( req.body );

    newRole.save((err, element)=> {
        if(err) res.send(err);
        res.json(element); //envoi de l'object en tant que json
        console.log('controller : createuser', element);
    });
}