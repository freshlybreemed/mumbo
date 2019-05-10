import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'
import {StripeProvider} from 'react-stripe-elements';

import MyStoreCheckout from './MyStoreCheckout';

export default class Checkout extends React.Component {
  onToken = (token, addresses) => {
    const body = {
        amount: 2500,
        token: token
    }
    axios.post('http://localhost:8000/ticket', body).then(response => {
        console.log(response)
      // res.send({})
    }).catch(error =>{
        console.log("Payment Error: ", error);
        alert("Payment Error")
        // res.send
    })
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_KJ6mPZxJuMvOl8yqmsCtdM9J00bx9VCCpE"
        token={this.onToken}
        amount="2500"
        billingAddress={true}
        description="Crank Karaoke"
        // image="https://yourdomain.tld/images/logo.svg"
        locale="auto"
        name="Chicken & Mumbo Sauce"
      />
    )
  }
}