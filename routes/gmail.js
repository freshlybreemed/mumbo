const { json, send } = require("micro");
const stripe = require("stripe")(process.env.STRIPE_SECRET_PROD);
const axios = require("axios");

const dispatchTicket = token => {
  const headers = {
    Authorization: "Token " + process.env.GUEST_PASS_KEY,
    "Content-Type": "application/json"
  };
  return axios({
    method: "post",
    url: "https://app.guestmanager.com/api/public/v2/tickets",
    data: {
      ticket: {
        event_ticket_type_id: 26926,
        name: token.card.name,
        email: token.email,
        dispatch: true
      }
    },
    headers: headers
  });
};
const stripeChargeCallback = (res, token) => async (err, charge) => {
  if (err) {
    send(res, 500, { error: err });
  } else {
    // TODO: handle flow of dispatch ticket failing
    await dispatchTicket(token);
    send(res, 200, { success: charge, token: token });
  }
};
const ticketApi = async (req, res) => {
  const data = await json(req);
  const body = {
    source: data.token.id,
    amount: data.amount,
    currency: "usd"
  };
  stripe.charges.create(body, stripeChargeCallback(res, data.token));
};

module.exports = ticketApi;
