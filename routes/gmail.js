const {json, send} = require('micro');
const stripe = require("stripe")(process.env.STRIPE_SECRET_PROD);
const axios = require('axios');

const dispatchTicket = async (token) => {
  console.log('getting 2 it')
}
const stripeChargeCallback = (res, token) => (stripeErr, stripeRes) => {
  if (stripeErr) {
    console.log("TICKET FAIL")
    send(res, 500, { error: stripeErr });
  } else {
    console.log("TICKET")
    send(res, 200, { success: stripeRes, token: token });
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
          "name": data.token.card.name,
          "email": data.token.email,
          "dispatch": true
      }
    },
    headers: headers
    }).then((res) => {
      console.log("RESPONSE RECEIVED: ", res.data);
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
    console.log('getting done it')

  
}
module.exports = ticketApi;