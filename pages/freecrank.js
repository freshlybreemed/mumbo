import React from 'react'
import { Component } from "react";

import Navigation from '../components/Navigation'
import FreeCrank from '../components/FreeCrank'
const Crank = () => (
    <div class="wrapper">
      <Navigation />
      <img src="static/img/logocrank.png" class="flyerimage" />
      <div class="row">
          <div class="date">FREE RSVP</div>
        </div>

      <FreeCrank />
    </div>
)
export default Crank