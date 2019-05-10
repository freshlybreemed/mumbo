import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import {StripeCheckout} from '../components/StripeCheckout'


export default withPosts( ({ posts }) => {
  return (
      <div class="wrapper">
          <div class="lineup">CHICKEN & MUMBO SAUCE PRESENTS</div><br></br>
          <StripeCheckout />
      </div>
  )
})