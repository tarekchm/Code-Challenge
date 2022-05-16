const connection = require('./db');
const express = require('express');
const mongoose= require ('mongoose');
const app = express();
const bodyParser = require ('body-parser');
var cors = require('cors')

mongoose.connect("mongodb+srv://tarekchm:tarek123@crud.ofcjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
});

connection.connectToServer(function (err) {
    const apis=require ('./routes/task');
    app.use('/apis',apis);
    
});

app.get('/products/:id', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

  app.use(cors())
   
  

app.use(bodyParser.json());
app.listen(8000)