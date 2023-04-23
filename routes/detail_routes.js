const  express = require('express')
const Detail= require('../model/Detail')


const router = express.Router()

router.route('/')
    .get(async(req,res) =>{
        Detail.find()
            .then(details => res.json(details))
            .catch(err => res.log(err))
    })