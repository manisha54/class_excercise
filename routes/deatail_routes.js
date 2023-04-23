const  express = require('express')


const router = express.Router()

router.route('/')
    .get(async(req,res) =>{
        Detail.find()
            .then(details => res.json(details))
            .catch(err => res.log(err))
    })