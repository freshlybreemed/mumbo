const axios = require("axios")
const {send} = require('micro');
const stripe = require("stripe")(process.env.STRIPE_SECRET_PROD)

const balanceApi = async (req, res)  => { 
    // Get events
    var count = 0
    console.log("GIT")
    var charges = []
  await stripe.charges.list({limit: 100}).autoPagingEach(function(customer) {
      // Do something with customer
      count++
      charges.push(customer)
      console.log(customer)
  })
  send(res, 200,charges);
}

module.exports = balanceApi