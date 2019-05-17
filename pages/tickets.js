import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Navigation from '../components/Navigation'
import StripeCheckout from '../components/StripeCheckout'
import {StripeProvider, Elements} from 'react-stripe-elements'
import CheckoutForm from '../components/CheckoutForm'



export default withPosts( ({ posts }) => {
  return (
      <div class="row">
      
        <Navigation />
        <img src="static/img/logocrank.png" class="cash"/>          
        <div class="features">
        < img class="yellow-star" src="static/img/yellowstar.png"/>  

          <div class="item">
        TICKETS</div> 
        <img class="yellow-star" src="static/img/yellowstar.png"></img>      </div> 
        <section class="ticketing">
          <div class="ticketing-row">
          < br></br>
            <div class="ticketing-bold">EARLY BIRD</div>
            <div class="ticketing-bold">$15 + 2.15 FEE
            </div>
            {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
            <div class="ticketing-regular">SALE ENDS JUNE 1<StripeCheckout price={1715}/>
            </div>
            
            {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
         </div>
         <div class="ticketing-row">
          < br></br>
            <div class="ticketing-bold">GENERAL ADMISSION (TIER 1)</div>
            <div class="ticketing-bold">$20 + 2.75 FEE   
            </div>
            {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
            <div class="ticketing-regular">SALE ENDS JUNE 6<StripeCheckout price={2275}/>
            </div>
            
            {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
         </div> 
         <div class="ticketing-row">
          < br></br>
            <div class="ticketing-bold">GENERAL ADMISSION (TIER 2)</div>
            <div class="ticketing-bold">$25 + 3.12 FEE
            </div>
            {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
            <div class="ticketing-regular">SALE ENDS JUNE 14<StripeCheckout price={2812}/>
            </div>
            
            {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
         </div> 
         <div class="ticketing-row">
          < br></br>
            <div class="ticketing-bold">BOTTLE SERVICE</div>
            {/* <div class="ticketing-bold">PER REQUEST</div> */}
            {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
            <div class="ticketing-regular">For all bottle and table requests please contact stamp@chickenandmumbosauce.com</div>
            
            {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
         </div>
        </section>
      </div>
  )
})