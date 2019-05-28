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
              <div class="ticketing-bold">$15 + 2.45 FEE
              </div>
              {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
              <div class="ticketing-regular">SALE ENDS MAY 29th<StripeCheckout price={1745}/>
              </div>
              
              {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
          </div>
          <div class="ticketing-row">
            < br></br>
            <img class="ticketing-drum" src="static/img/drum.png"></img> 
              <div class="ticketing-bold">GENERAL ADMISSION</div>
              <div class="ticketing-bold">$25 + 3.75 FEE   
              </div>
              {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
              <div class="ticketing-regular">WHILE SUPPLIES LAST<StripeCheckout price={2875}/>
              </div>
              
              {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
          </div> 
          <div class="ticketing-row">
            < br></br>
            <img class="ticketing-drum" src="static/img/drum.png"></img> 
              <div class="ticketing-bold">LAST CALL</div>
              <div class="ticketing-bold">$30 + 3.96 FEE</div>
              {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
              <div class="ticketing-regular">WHILE SUPPLIES LAST<StripeCheckout price={3396}/>
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