const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
const fs = require('fs');
const {json, send} = require('micro');
const stripe = require("stripe")(process.env.STRIPE_SECRET_PROD);
const {google} = require('googleapis');
const axios = require('axios');
const dispatchTicket = (token) => {
  const headers = {
    'Authorization': 'Token ' + process.env.GUEST_PASS_KEY,
    'Content-Type': 'application/json'
  }
  axios({
    method: 'post',
    url: 'https://app.guestmanager.com/api/public/v2/tickets',
    data: {
      "ticket": { 
          "event_ticket_type_id": 26926,
          "name": token.card.name,
          "email": token.email,
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
const stripeChargeCallback = (res, token) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    send(res, 500, { error: stripeErr });
  } else {
    send(res, 200, { success: stripeRes, token: token });
    dispatchTicket(token)
  }
};
const ticketApi = async (req, res)  => {  
  console.log(req.url)
  const data = await json(req);
  console.log(data);
  const body = {
      source: data.token.id,
      amount: data.amount,
      currency: "usd",
  };
  stripe.charges.create(body, stripeChargeCallback(res, data.token));
  
}
module.exports = ticketApi;