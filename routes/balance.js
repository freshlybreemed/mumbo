const axios = require("axios")
const {send} = require('micro');
const stripe = require("stripe")(process.env.STRIPE_SECRET_PROD)


const balanceApi = async (req, res)  => { 
    stripe.charges.list({ limit: 100 },
        function(err, charges) {
          // asynchronously called
          if(err) console.log(err)
          else{
            console.log(charges.data.length)
            res.end(charges.data)
          }
        }
      );
    // console.log(process.env.STRIPE_SECRET_PROD) 
    // axios({
    //     url: "https://api.stripe.com/v1/balance", 
    //     method: "get",
    //     headers:{"Stripe-Version":"2019-05-16"},
    //     auth: {
    //         username: process.env.STRIPE_SECRET_PROD
    //     }
    // }).then((res)=>{
    //     console.log(res.data)
    //     res.end(res, 200, {})
    // })
}

module.exports = balanceApi