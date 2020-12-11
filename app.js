// entry point
//IMPORT
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const bodyparser = require('body-parser');

//IMPORT MONGOOSE
const mongoose = require('mongoose')
//DB CONFIG
const dbConfig = require('./config/db.config');

//configuration des routes
const userRoute = require('./src/routes/user.route');
const postRoute = require('./src/routes/post.route');


//configuration de body-parser qui va utiliser les requests en json
app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json())

//--------------connection mongoose
mongoose.connect(
    `mongodb+srv://${dbConfig.HOST}:${dbConfig.MDP}@clusterfree.ui4mf.mongodb.net/${dbConfig.DB}?retryWrites=true&w=majority`, 
    {
    useNewUrlParser:true,
    useUnifiedTopology:true
    },
    (err) => {
        if(err) console.log(err.message);
        console.log('Connected');
    }
);

//-------------simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to PulcoOx application." });
});

//-------------routing
app.use('/users', userRoute);
app.use('/posts', postRoute);

//-------------SET PORT, LISTEN FOR REQUEST
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
});

