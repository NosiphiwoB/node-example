const express = require('express')
const bodyParser = require("body-parser");
const app = express()
app.use(bodyParser.json());
const {studentRoutes} = require('./routes/student.js')

studentRoutes(app)


const mongoose = require('mongoose');

const uri = "mongodb+srv://NosiphiwoB:biyela0305@cluster0.lr5epya.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(uri).then(res => console.log("db running")).catch(e => console.log("e", e));

app.listen(4004, () => { console.log("server running on port 4004") })