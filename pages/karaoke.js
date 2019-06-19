import React from 'react'
import { Component } from "react";
import Karaoke from '../components/Karaoke'
import Navigation from '../components/Navigation'
import Stripe from '../components/Stripe'
const Crank = () => (
    <div class="row">
      <title>Crank Karaoke List</title>
      <img src="static/img/logocrank.png" class="flyerimage" />

      <Karaoke />
    {/* <Stripe /> */}
    </div>
)
export default Crank