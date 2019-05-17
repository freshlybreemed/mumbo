import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'

import MyStoreCheckout from './MyStoreCheckout';

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    const body = {
        amount: 2500,
        token: token
    }
    axios.post('http://localhost:8000/ticket', body).then(response => {
        window.location = '/confirmation?email='+response.data.token.email
        console.log(response)
    }).catch(error =>{
        console.log("Payment Error: ", error);
        alert("Payment Error")
    })
  };

  render() {
    console.log(this.props.price)
    return (
      <StripeCheckout
        stripeKey="pk_test_KJ6mPZxJuMvOl8yqmsCtdM9J00bx9VCCpE"
        token={this.onToken}
        amount={this.props.price ? parseInt(this.props.price): 1110}
        billingAddress={true}
        description="Crank Karaoke"
        image="http://localhost:3000/static/img/graph.png"
        locale="auto"
        name="Chicken & Mumbo Sauce"
      />
    ) 

  }
}