const mongoose  = require('mongoose')

const detailScheme = new mongoose.Schema({
    id : {
        type: int,
        required : true
    },
    name : {
        type: String,
        default : 'Anonymous'
    },
    number : {
        type: int,
        default : 'Anonymous'
    }

}, { timestamps: true})
module.exports = mongoose.model('Books', bookScheme)