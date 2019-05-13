import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Navigation from '../components/Navigation'
// import {StripeCheckout} from '../components/StripeCheckout'
import {StripeProvider, Elements} from 'react-stripe-elements'
import CheckoutForm from '../components/CheckoutForm'



export default withPosts( ({ posts }) => {
  return (
      <div class="row">
        <Navigation />
        <img src="static/img/logocrank.png" class="cash"/>          
        <div class="event-info small-12 medium-6 columns event-details">
            <h2 class="topline-info">U Street Music Hall Presents...</h2><h1 class="headliners summary">CloZee</h1>      <h2 class="supports description">Bluetech, Choppy Oppy (live)</h2>
            <h2 class="dates"><div class="ticket-price">
                        <h3 class="price-range">
                  $25       </h3>
                                <h3 class="ticket-link primary-link"><a class="tickets" href="https://www.ticketfly.com/purchase/event/1821955" onclick="return tfly_openWindowGA(this);" target="_blank">Tickets</a></h3>
                          </div>Sat, May 25</h2><h2 class="times"><span class="doors">Doors: 10:00 pm</span></h2>
            <abbr class="location" >9:30 Club</abbr>    
          </div>
      </div>
  )
})