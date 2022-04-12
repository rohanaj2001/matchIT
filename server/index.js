const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors')
const aboutroute = require('./routes/about.js')
const contactusroute = require('./routes/contactus.js')
const homeroute = require('./routes/home.js')
const mongoose = require('mongoose');

app.use(cors())

const CONNECTION_URL = 'mongodb+srv://rohanaj:rohanaj@cluster0.81etx.mongodb.net/matchIT?retryWrites=true&w=majority'
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', homeroute)
app.use('/about', aboutroute)
app.use('/contactus', contactusroute)
const port = process.env.PORT || 5000
try {
    mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(app.listen(port))
        .then(console.log("connection successful"))
} catch {
    console.log("connectiom unsuccessful");
}

console.log(port);