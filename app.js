var cloudinary = require('cloudinary');
var express = require('express');
var app = express();
const mongoose = require('mongoose');
const dotenv  = require('dotenv');
dotenv.config();
//COnnect mongodb

mongoose.connect(process.env.MONGO_URI , {
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(() => console.log("MOngodb is connected"))
.catch((err) => console.log("Error connecting mongodb"));


//middleware
app.use(express.json());


app.use('/user',require('./route/user'));
app.listen(5000 , () => console.log('Server is running'));
