const connection = require('./db');
const express = require('express');
const mongoose= require ('mongoose');
const app = express();
const bodyParser = require ('body-parser');

mongoose.connect("mongodb+srv://tarekchm:tarek123@crud.ofcjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

connection.connectToServer(function (err) {
    const apis=require ('./routes/task');
    app.use('/apis',apis);
    
});

app.use(bodyParser.json());
app.listen(8000)