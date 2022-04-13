const { json } = require('body-parser');
const { create } = require('../models/shirtSchema');
const { spawn } = require('child_process');

const shirts = require('../models/shirtSchema')
const pants = require('../models/pantSchema')

const homeget = (req, res) => {
    res.send("home page")

}

const shirtPost = async (req, res) => {
   
        
        // console.log(req.body.shirtImage);
        try {
            // await shirts.create({ shirtImage: req.body.shirtImage })

            var dataToSend
            var img=req.body.shirtImage;
            const python = spawn('python', ['./python_scripts/test.py', img]);
            python.stdout.on('data', function (data) {
                console.log('Pipe data from python script ...');
                dataToSend = data.toString();
            });
            python.on('close', (code) => {
                console.log(`child process close all stdio with code ${code}`);
                res.send(dataToSend)

            // res.send({status:200})
    
        })} catch (error) {
            console.log(error);
        res.send({status:400})
    
        }
        
}

const pantPost = async (req, res) => {
   
        
    console.log(req.body.pantImage);
    try {
        await pants.create({ pantImage: req.body.pantImage })
        res.send({status:200})

    } catch (error) {
        console.log(error);
    res.send({status:400})

    }
    
}


const about = (req, res) => {
    res.send("about page")

}
const contactus = (req, res) => {
    res.send("contact page")

}
module.exports = { homeget, shirtPost,pantPost, about, contactus };