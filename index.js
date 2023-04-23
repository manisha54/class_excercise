//Write a phonebook app using node and express.
require ('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const detail_routea = require('./routes/detail_routes' )


mongoose.connect('mongodb://127.0.0.1:27017/Books-Review')
  .then(()=>{
    console.log('connected to the mongodb database server')
  })
  .catch((err) => console.log(err))




const app = express()
app.use(express.json())


app.get('/', (req,res) =>{
    res.send(" person details")
})





app.use('/api/details', detail_routea )

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})