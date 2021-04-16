var cloudinary = require('cloudinary');
var express = require('express');
var app = express();
const mongoose = require('mongoose');
const dotenv  = require('dotenv');
dotenv.config();
var cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization,auth-token"
	);
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
		return res.status(200).json({});
	}
	next();
});
//COnnect mongodb

mongoose.connect(process.env.MONGO_URI , {
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(() => console.log("MOngodb is connected"))
.catch((err) => console.log("Error connecting mongodb"));

app.get("/", async (req,res) => {
    res.send("HEllo fellow coders _--_");
})
//middleware
app.use(express.json());


app.use('/user',require('./route/user'));
app.listen(process.env.PORT || 5000 , () => console.log('Server is running'));
