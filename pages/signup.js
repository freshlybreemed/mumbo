import React from 'react'
import { Component } from "react";

import Navigation from '../components/Navigation'
import SignUpForm from '../components/SignUpForm'

const Free = () => (
    <div >
      <title>Crank Karaoke - Sign-Up</title>
      <Navigation />
      <br></br>
      <div class="wrapper">
        <div class="row">
          <div class="signup-band">Reaction Band</div>
          <div class="signup-songs">
            Gucci Bandana, Clapping Song, Feels Good, Snap Ya Fingerz, Shawty, She Can Get It 
          </div>
        <div class="signup-band">UCB</div>
        <div class="signup-songs">
          Sexy Lady, VSOP, Splash Girl 
        </div>
        <div class="signup-band">CCB</div>
        <div class="signup-songs">
        Bazooka Bottom, Hennessy, Smiley Girl (Can You Handle It), My Phatty, Roll Call
        </div>
        <div class="signup-band">New Impressionz</div>
        <div class="signup-songs">
        Take My Breath Away, Dumb,  Found Myself A Clappa, Pick It Up, Strip Girl, Pop Your P****y
        </div>
        <div class="signup-band">TCB</div>
        <div class="signup-songs">
        Chiggy Bum, I Want A Girl, Ass Clap, Bust It Wide Open, Pole Party,  2005 (Wipe Me Down)
        </div>
        <div class="signup-band">Backyard Band</div>
        <div class="signup-songs">
        Keep It Gangsta (96 Dope Jam) , 98 Dope Jam , Sick Of Being Lonely, T-Shirt (F**k V-day), Skillet, Unibomer, Still Ray, Fakin Like..
        </div>
        <div class="signup-band">MOB</div>
        <div class="signup-songs">
        Bring Em Out, Don’t Be mad, 100 Guns 100 Clips
        </div>
        <div class="signup-band">ABM</div>
        <div class="signup-songs">
        Knock It Out, Shawty Bop/ Chop, Can't Feel My Face, Slow Bounce Time
        </div>
        <div class="signup-band">TOB</div>
        <div class="signup-songs">
        Bouncing To Dis, Before I Let Go, Take Me There
        </div>
        <div class="signup-band">XIB</div>
        <div class="signup-songs">
        09 Booty Bounce , Whoo Lawd , Super Freak, I’m In The Kitchen
        </div>
        </div>
      </div>
      <SignUpForm />
    </div>
)
export default Free