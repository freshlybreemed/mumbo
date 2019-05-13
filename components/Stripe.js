import React from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import Shop from './Shop'

const App = () => {
  return (
    <StripeProvider apiKey="pk_test_xxxxxxxxxxxxxxxxxxxxxxxx">
      <Elements>
        <Shop/>
      </Elements>
    </StripeProvider>
  )
}