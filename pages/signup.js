import React from 'react'
import { Component } from "react";

import Navigation from '../components/Navigation'
import SignUpForm from '../components/SignUpForm'
const Free = () => (
    <div >
      <title>Crank Karaoke - Sign-Up</title>
      <Navigation />
      <img src="static/img/logocrank.png" class="flyerimage" />
      <br></br>
      <div class="signup">
        <div class="row">
          {/* {content} */}
          <div class="signup-band">CRANK INSTRUCTIONS</div>
          <p class="signup-songs">
              Here's how you can be the lead mic for the night.
          </p>          
          <div >
              <p class="signup-songs">Slots are limited, so move FAST. First come, first serve. There are limited slots and hundreds of people trying to sign up, the sign up list will fill up quick. Once a song has been chosen, you will not see that song on our site, it means all the slots have already been claimed. </p>
          </div>
      
        </div>
      </div>
      <SignUpForm />
    </div>
)
export default Free