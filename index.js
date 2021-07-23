const express = require('express');
const app = express();
require('dotenv').config()

app.use(express.json());
const routes = require('./routes')


const PORT = process.env.PORT

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})

app.use('/api',routes)

// app.get('/api',(req,res)=>{
//     console.log("here")
//     client.messages.create({
//         body:"This sms is from Nodejs",
//         to:"8248540909",
//         from:"7708910274"
//     }).then((response)=>{
//         console.log("message send successfully")
//     }).catch((err)=>{
//         console.log(err)
//     })
// })
