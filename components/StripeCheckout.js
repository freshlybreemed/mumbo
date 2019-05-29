import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
require('now-env')


export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    const body = {
        amount: parseInt(this.props.price),
        token: token
    }
    axios.post('/ticket', body).then(response => {
        window.location = '/confirmation?email='+response.data.token.email
        console.log(response)
    }).catch(error =>{
        console.log("Payment Error: ", error);
        alert("Payment Error")
    })
  };

  render() {
    return (
      <StripeCheckout
        stripeKey={process.env.STRIPE_CLIENT_PROD}
        token={this.onToken}
        amount={this.props.price ? parseInt(this.props.price): 0}
        billingAddress={true}
        description="Chicken & Mumbo Sauce"
        image="/static/img/graph.png"
        locale="auto"
        name="Crank Karaoke"
      />
    ) 

  }
}