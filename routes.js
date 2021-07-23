const express = require('express');
require('dotenv').config()
const routes = express.Router();
const twilio = require('twilio');
const request = require("request")


//twilio account credentials
const accountSid=process.env.AUTH_ID;
const authToken = process.env.AUTH_TOKEN;  
var client = new twilio(accountSid,authToken)

//sending sms using twilio
routes.post('/sendsms',(req,res)=>{
    client.messages.create({
                body:"This sms is from Nodejs",
                to:"+14151234567",
                from:"+14157654321"
            }).then((response)=>{
                console.log("message send successfully",s)
            }).catch((err)=>{
                console.log("errr",err)
            })
})

//sending sms using plivo
routes.post('/plivosms',async(req,res)=>{

 const auth_id = process.env.auth_id;
 const auth_token = process.env.auth_token;
 let client = new plivo.Client(auth_id, auth_token);
 client.messages.create(
        '+14151234567',
        '+14157654321',
        'Hello, from Node Express!'
    ).then((message_created)=> {
        console.log(message_created)
    })
    .catch(err=>{
        console.log(err)
    })

})


//sending sms using 46elks
request.post("https://api.46elks.com/a1/SMS", {
    "auth": {
        "user": "<API-Username>",
        "pass": "<API-Password>"
    },

    "form": {
        "from": "NodeElk",
        "to": "+46723175800",
        "message": "Hej Vad trevligt att se dig!"
    }
}, (err, response, body) => {
    if (err) {
        console.error(err)
    } else if (response.statusCode !== 200) {
        console.error("Error", response.statusCode, body)
    } else {
        console.log("Success!")
    }
})

module.exports = routes;