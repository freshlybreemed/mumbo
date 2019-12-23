import React from 'react';
import { Component } from 'react';

import Navigation from '../components/Navigation';
import SignUpForm from '../components/SignUpForm';
const Free = () => (
  <div>
    <title>Crank Karaoke - Sign-Up</title>
    <Navigation />
    <img src="static/img/logocrank.png" class="flyerimage" />
    <br></br>
    <div class="signup">
      <div class="signup-band">SONG LIST</div>
      <br />
      <img src="/static/img/crankielist.jpg" style={{ width: '100%' }} />
      <div class="row">
        <div class="signup-band">CRANK INSTRUCTIONS</div>
        <p class="signup-songs">
          Here's how you can be the lead mic for the night.
        </p>
        <div>
          <p class="signup-songs">
            Slots are limited, so move FAST. First come, first serve so the sign
            up list will fill up quick!{' '}
          </p>
          <p class="signup-songs">
            Once a song has been chosen, you will not see that song in the form,
            it means that slots have already been claimed.{' '}
          </p>
        </div>
      </div>
    </div>
    <SignUpForm />
  </div>
);
export default Free;
