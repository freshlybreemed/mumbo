/**
 *
 * Header
 *
 */

import React, {Component} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderWrapper } from '../static/css/navbar'
import StripeCheckout from './StripeCheckout'

class Ticket extends Component {

  render(){

    return (
      <div>
        <div class="row">
          <title>Tickets</title>
          <img src="static/img/logocrank.png" class="cash"/>          
          <div class="tickets-header ">
           PURCHASE TICKETS <br></br>
            <div class="tickets-subheader">
              
            21+ only. There are NO REFUNDS and NO EXCHANGES. All ticket sales are final.

            </div>
          </div> 

          <section class="ticketing-section">
            <div class="ticketing-row">
            <br></br>
            <img class="ticketing-drum" src="static/img/drum.png"></img> 
              <div class="ticketing-bold">EARLY BIRD</div>
              <div class="ticketing-bold">$15 + 2.15 FEE
              </div>
              {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
              <div class="ticketing-regular">SALE ENDS MAY 29th<StripeCheckout price={1715}/>
              </div>
              
              {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
          </div>
          <div class="ticketing-row">
            < br></br>
            <img class="ticketing-drum" src="static/img/drum.png"></img> 
              <div class="ticketing-bold">GENERAL ADMISSION</div>
              <div class="ticketing-bold">$25 + 3.15 FEE   
              </div>
              {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
              <div class="ticketing-regular">WHILE SUPPLIES LAST<StripeCheckout price={2815}/>
              </div>
              
              {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
          </div> 
          <div class="ticketing-row">
            < br></br>
            <img class="ticketing-drum" src="static/img/drum.png"></img> 
              <div class="ticketing-bold">LAST CALL</div>
              <div class="ticketing-bold">$30 + 3.76 FEE</div>
              {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
              <div class="ticketing-regular">WHILE SUPPLIES LAST<StripeCheckout price={3376}/>
              </div>
              
              {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
          </div> 
          <div class="ticketing-row">
            < br></br>
            <img class="ticketing-drum" src="static/img/drum.png"></img> 
              <div class="ticketing-bold">BOTTLE SERVICE</div>
              {/* <div class="ticketing-bold">PER REQUEST</div> */}
              {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
              <div class="ticketing-regular">For all bottle and table requests please text 301-974-7705</div>
              
              {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
          </div>
          </section>
        </div>
      </div>
    )
  }
}


export default Ticket;