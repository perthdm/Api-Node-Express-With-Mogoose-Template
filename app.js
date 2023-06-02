const express = require('express');
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 7077;
var uri = 'mongodb://localhost:27017/ebook';
var db = mongoose.connect(uri);

app.use(cors());
app.options('*',cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
require('./routes/user.route')(app);


app.listen(port , (req,res)=> {
    console.log("Server run at port : "+port);
});

