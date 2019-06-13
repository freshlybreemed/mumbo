import React from 'react'
import { Component } from "react";

import Navigation from '../components/Navigation'


const Index = () => (
    <div class="home">
      <title>Chicken & Mumbo Sauce</title>
      <Navigation />
       <div class="row">
          <div class="lineup"> </div><br></br>
        </div>
        {/* style="opacity: 1;" */}
        <video id="home__sizzle-video-bg" class="home__sizzle-video-bg" data-keepplaying autoPlay playsinline muted loop preload="auto" poster="static/img/domyen.png" >
            <source src="static/video/mumbo-ceej.mp4" type="video/mp4"/>
          </video>
        {/* <img src="static/img/cash.gif" class="cash"/> */}
        <div class="home__photo_feed"> 
          <div class="venue-title">Walt. GoldLink. Marauder. Ciscero </div>
          <img src="static/img/goldlink.jpg" class="flyerimage" />
        </div>      
        <div class="home__photo_feed">
          <img src="static/img/vaughn.jpg" class="flyerimage" />
          < div class="venue-title">NOT YOUR AVERAGE PARTY MOE</div>

        </div>
        <div class="home__photo_feed">
          < div class="venue-title">Ayyyyeeee TJ!</div>
          <img src="static/img/tj-2.jpg" class="flyerimage" />

        </div>  
        <div class="row">
          <div class="shows-header">UPCOMING SHOWS:</div>
          <div>
            <a href="/crank">
              <img src="static/img/crankxsmall.png" />
            </a>

            <img src="static/img/mumbo930.png" />
          </div>
        </div>
        {/* <div class="row">
          <div class="lineup">DJ SETS: FILET MIGNON & MALCOLM XAVIER </div>
        </div>
        <div class="row">
          <div class="date">FRI. JUNE 14th</div>
        </div>
        <div class="row">
          <div class="date">9PM - 2AM</div>
        </div>
        <div class="row">
          <div class="lineup">620 T ST NW DC 20001</div>
        </div>
        <div class="row">
        <br></br>
        <form action="/tickets">
            <input type="submit" value="TICKETS"/>
          </form>
        <div class="row">
          <div class="tickets"><img class="yellow-star" src="static/img/yellowstar.png"/>
                THIS IS YOUR NIGHT 
            TO BE LEAD MIC
            <img class="yellow-star" src="static/img/yellowstar.png"/>
          </div>
        </div> 
        <div class="row">
          <div class="about">
          Crank Karaoke is a one of a kind, improv jam session and open mic where the funky sounds of go-go collide with community to experience music together and express themselves freely. Featuring a live band of former go-go band musicians, look forward to a karaoke-inspired experience with a not-so-shy audience singing popular covers and renditions of culturally relevant songs. Essentially, it’s a party where beginners and experts can share the stage to learn and create together. We know the power of go-go music and we want to use it to restore the culture not exploit it.        </div>
          <br></br>
          <img src="static/img/karaokepooh.gif" class="gif" id="logos"/>	 */}
          {/* Its not a hit until a go-go band remakes it! */}
        {/* </div> / */}
        {/* <br></br>
            <br></br>
  
      </div> */}
  
    </div>
    )
export default Index;
  