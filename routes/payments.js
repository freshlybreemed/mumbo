const stripe = require("stripe")("sk_test_JBNJTNK46jdUvLLug42ez1hW00eL4QQdjU");
const stripeChargeCallback = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
};
const paymentApi = app => {
  app.get("/", (req, res) => {
    res.send({
      message: "Hello Stripe checkout server!",
      timestamp: new Date().toISOString()
    });
  });
app.post("/payment", (req, res) => {
    const body = {
      source: req.body.token.id,
      amount: req.body.amount,
      currency: "usd",
    };
    console.log(req.body)
    stripe.charges.create(body, stripeChargeCallback(res));
});
  return app;
};
module.exports = paymentApi;