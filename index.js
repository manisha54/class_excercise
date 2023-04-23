//Write a phonebook app using node and express.

const express = require('express')

app.get('/', (req,res) =>{
    res.send(" phone number")
})


app.use('/api/details', detail_routea )

app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})