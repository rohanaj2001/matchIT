const mongoose = require('mongoose');

const shirtSchema= mongoose.Schema({
    shirtImage : String,
})

const shirts = mongoose.model('shirts', shirtSchema);
module.exports= shirts;
