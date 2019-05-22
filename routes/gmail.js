const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const {json, send} = require('micro');
const stripe = require("stripe")(process.env.STRIPE_SECRET_PRO);
const {google} = require('googleapis');
const axios = require('axios');
const stripeChargeCallback = (res, token) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    send(res, 500, { error: stripeErr });
  } else {
    send(res, 200, { success: stripeRes, token: token });
  }
};

const ticketApi = async (req, res)  => {  
    console.log(req.url)
    const data = await json(req);
    const headers = {
      'Authorization': 'Token 564db0117b8a65ddd60271eaf3298aa4',
      'Content-Type': 'application/json'
  }
    if(data.ticket.dispatch){
      axios({
        method: 'post',
        url: 'https://app.guestmanager.com/api/public/v2/tickets',
        data: {
            "ticket": { 
                "event_ticket_type_id": 26926,
                "name": data.ticket.name,
                "email": data.ticket.email,
                "dispatch": true
            }
        },
        headers: headers
      }).then((res) => {
        console.log("RESPONSE RECEIVED: ", res);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
    }
    else {
      console.log(data)  ;
      const body = {
          source: data.token.id,
          amount: data.amount,
          currency: "usd",
      };
      stripe.charges.create(body, stripeChargeCallback(res, data.token));

      axios({
          method: 'post',
          url: 'https://app.guestmanager.com/api/public/v2/tickets',
          data: {
              "ticket": { 
                  "event_ticket_type_id": 26926,
                  "name": data.token.card.name,
                  "email": data.token.email,
                  "dispatch": true
              }
          },
          headers: headers
        }).then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
        })
      }
}

module.exports = ticketApi;