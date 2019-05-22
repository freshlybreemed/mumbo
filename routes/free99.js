const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const {json, send} = require('micro');
const axios = require('axios');


const ticketApi = async (req, res)  => {  
    console.log(req.url)
    const data = await json(req);
    console.log(data)  ;
    res.send('thanks')
    // const body = {
    //     source: data.token.id,
    //     amount: data.amount,
    //     currency: "usd",
    // };

    // const headers = {
    //     'Authorization': 'Token 564db0117b8a65ddd60271eaf3298aa4',
    //     'Content-Type': 'application/json'
    // }
    // axios({
    //     method: 'post',
    //     url: 'https://app.guestmanager.com/api/public/v2/tickets',
    //     data: {
    //         "ticket": { 
    //             "event_ticket_type_id": 26926,
    //             "name": data.token.card.name,
    //             "email": data.token.email,
    //             "dispatch": true
    //         }
    //     },
    //     headers: headers
    //   }).then((res) => {
    //     console.log("RESPONSE RECEIVED: ", res);
    //   })
    //   .catch((err) => {
    //     console.log("AXIOS ERROR: ", err);
    //   })
}

module.exports = ticketApi;