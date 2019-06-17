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

class Community extends Component {
  constructor(props){
    super(props);
    this.state = {
      quantity: 0,
      weekendCount: 0,
      type: '',
      gaCount: 0,
      lastCallCount: 0,
      weekendPrice: 2000,
      gaPrice: 2878,
      lastCallPrice: 3398,
      total: 0
    }
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleIncrement(e, type) {
    console.log(type)
    if (type == 'lastCall')
      this.setState({ 
        lastCallCount: this.state.lastCallCount + 1,
        total: this.state.total + this.state.lastCallPrice,
        type
       },()=>{
        console.group(this.state)
      });
    if (type == 'ga')
      this.setState({ 
        gaCount: this.state.gaCount + 1,
        total: this.state.total + this.state.gaPrice,
        type
      },()=>{
        console.group(this.state)
      });
    if (type == 'weekend')
      this.setState({ 
        weekendCount: this.state.weekendCount + 1,
        total: this.state.total + this.state.weekendPrice,
        type
       },()=>{
        console.group(this.state)
      });

    this.setState({ quantity: this.state.quantity + 1 });
    
  }

  handleDecrement(e, type) {
    if (type == 'lastCall' && this.state.quantity >= 1 && this.state.lastCallCount >= 1)
    this.setState({ 
      lastCallCount: this.state.lastCallCount - 1,
      quantity: this.state.quantity - 1,
      total: this.state.total - this.state.lastCallPrice
     },()=>{
      console.group(this.state)
    });
    if (type == 'ga' && this.state.quantity >= 1 && this.state.gaCount >= 1)
      this.setState({ 
        gaCount: this.state.gaCount - 1,
        quantity: this.state.quantity - 1,
        total: this.state.total - this.state.gaPrice
      },()=>{
        console.group(this.state)
      });
    if (type == 'weekend' && this.state.quantity >= 1 && this.state.weekendCount >= 1)
      this.setState({ 
        weekendCount: this.state.weekendCount - 1,
        quantity: this.state.quantity - 1,
        total: this.state.total - this.state.weekendPrice
      },()=>{
        console.group(this.state)
      });
  }
  handleChange(e , another) {
    console.log(e)
    console.log("e")
    console.log(another)
    var value = e.target.value.replace(/[^0-9]/, '');
    value = (value == '' ? 1 : value);
    value = parseInt(value);
    this.setState({ quantity: value });
}
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
          <div class="events-wrapper">
              <div class="media">
                <div class="ticket-list">
                  <h2 class="ticket-list__item__text--title" itemprop="performer">COMMUNITY</h2>          
                  <p class="ticket-list__item__text--support">$20</p>         
                  <p class="ticket-list__item__text--info">WHILE SUPPLIES LAST</p>
                  <div class="ticket-quantity-input">
                    <span onClick={(e) => this.handleDecrement(e,"weekend")}>-</span>
                    <input class="quantity" type="text" value={this.state.weekendCount}  onChange={(e) => this.handleChange(e, "weekend")} />
                    <span onClick={(e) => this.handleIncrement(e,"weekend")}>+</span>
                    <div class="input-group-button"></div>
                  </div>  
                  <p class="ticket-quantity-text"> Quantity: &nbsp; &nbsp;</p> 
                </div>
              </div>
            </div>
                        <StripeCheckout metadata={{type:this.state.type,quantity:this.state.quantity}} quantity={this.state.quantity} price={this.state.total}/>
            <br></br>
            <br></br>
          </div>
        </div>
    )
  }
}


export default Community;