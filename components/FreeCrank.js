import React from 'react'
import { Component } from "react";
import axios from 'axios'
import Navigation from '../components/Navigation'

class FreeCrank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FNAME: '',
            EMAIL: '',
            LNAME: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

      }
      handleChange(e) {
        if (e.target.name =='FNAME')
            this.setState({FNAME: e.target.value}, () =>{
                console.log(this.state.FNAME)
            });
        if (e.target.name =='LNAME')
        this.setState({LNAME: e.target.value}, () =>{
            console.log(this.state.LNAME)
        });
        if (e.target.name =='EMAIL')
        this.setState({EMAIL: e.target.value}, () =>{
            console.log(this.state.EMAIL)
        });
      }
    handleSubmit(e) {
        e.preventDefault();
        const headers = {
            'Authorization': 'Token 564db0117b8a65ddd60271eaf3298aa4',
            'Content-Type': 'application/json',
        }
        axios({
                method: 'post',
                url: '/ticket',
                data: {
                    "ticket": { 
                        "event_ticket_type_id": 26926,
                        "name": this.state.FNAME + ' ' + this.state.LNAME,
                        "email": this.state.EMAIL,
                        "dispatch": true
                    }
                },
                headers: headers
              }).then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err);
              })
              window.location.href = "/confirmation";
      }
  
  
  render() {
    return (
    <div>
      <div class="free-crank">
        <form onSubmit={this.handleSubmit} class="rsvp-form">
          <div class="rsvp-form" >
            <label for="name">First Name: </label>
            <input type="text"  value={this.state.FNAME} onChange={this.handleChange} name="FNAME" id="name" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="name">Last Name: </label>
            <input type="text" value={this.state.LNAME} onChange={this.handleChange} name="LNAME" id="name" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="email">Email Address: </label>
            <input type="email" value={this.state.EMAIL} onChange={this.handleChange} name="EMAIL" id="email" required/>
          </div>
          <br></br>
          <br></br>
          <div class="rsvp-form">
            {/* <input type="submit" value="BUY TICKETS"/> */}
            {/* <StripeCheckout /> */}
          </div>
          <input type="submit" value="TICKETS"/>
        </form>
      </div>
  </div>
)
    }
  }
export default FreeCrank