import React from 'react';
import { Component } from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

let crank = [
  <img src="static/img/cap-930-compressed/untitled-10.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-11.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-13.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-14.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-19.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-20.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-21.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-22.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-24.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-25.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-27.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-28.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-29.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-3.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-31.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-33.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-6.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-7.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled-8.jpg" class="recap" />,
  <img src="static/img/cap-930-compressed/untitled.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3065.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3029-2.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3072.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3048.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2976.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3079.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3043.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2982.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3030.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3060-2.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2970.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2974.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3061.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2946.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3019.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3042.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2949.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2951.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3143.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2989.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3093.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3058.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3142.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3089.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2999.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2987.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3022.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3133.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3012.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2998.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3105.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3014-2.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2985.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2995.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3052.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3097.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2959.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3056.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3033.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2983.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3016.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3083.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3077.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3139-2.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3038.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3121.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3008.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3002.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3026.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_2944.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3107.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3130.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3028.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3006.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3083-2.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3035.jpg" class="recap" />,
  <img src="static/img/capture/CAPTURE_3085.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-10.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-11.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-12.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-13.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-14.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-15.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-16.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-17.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-18.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-19.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-2.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-20.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-21.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-22.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-23.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-24.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-25.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-26.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-27.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-28.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-29.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-3.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-31.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-32.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-33.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-34.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-35.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-36.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-37.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-38.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-39.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-4.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-40.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-41.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-42.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-43.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-44.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-5.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-6.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-7.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-8.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled-9.jpg" class="recap" />,
  <img src="static/img/cap-crank2-compressed/untitled.jpg" class="recap" />,
];

const randomize = array => {
  var image = array[Math.floor(Math.random() * array.length)];
  return image;
};

const Index = () => (
  <div class="wrapper">
    <title>Crank Karaoke</title>
    <Navigation />
    <div class="row">
      <div class="lineup"> </div>
      <br></br>
    </div>
    <img src="static/img/crank-christmas.png" class="flyerimage" />
    <img src="static/img/cash.gif" class="cash" />
    <div class="features">
      <div class="item">LIVE BAND</div>
      <img class="yellow-star" src="static/img/yellowstar.png"></img>
      <div class="item">GO-GO KARAKOKE </div>
      <img class="yellow-star" src="static/img/yellowstar.png"></img>
      <div class="item">JAM SESSION</div>
    </div>
    <div class="row">
      <div class="venue-title">U ST. MUSIC HALL</div>
      <br></br>
    </div>
    <div class="row">
      <div class="lineup-bigger">HOSTED BY: WALK LIKE WALT</div>
    </div>
    <div class="row">
      {/* <div class="lineup">DJ SETS: FILET MIGNON & MALCOLM XAVIER </div> */}
    </div>
    <div class="row">
      <div class="date">THURS. DEC 26th</div>
    </div>
    <div class="row">
      <div class="date">9PM - 2AM</div>
    </div>
    <div class="row">
      <div class="lineup">1115A U ST NW DC</div>
    </div>
    <div class="row">
      <br></br>
      <form action="https://www.bigneon.com/tickets/crank-karaoke-washington">
        <input type="submit" value="TICKETS" />
      </form>
      <div class="row">
        <div class="tickets">
          <img class="yellow-star" src="static/img/yellowstar.png" />
          THIS IS YOUR NIGHT TO BE LEAD MIC
          <img class="yellow-star" src="static/img/yellowstar.png" />
        </div>
      </div>
      <div class="row">
        {/* <div class="about">
          Crank Karaoke is a one of a kind, improv jam session and open mic
          where the funky sounds of go-go collide with community to experience
          music together and express themselves freely. Featuring a live band of
          former go-go band musicians, look forward to a karaoke-inspired
          experience with a not-so-shy audience singing popular covers and
          renditions of culturally relevant songs. Essentially, it’s a party
          where beginners and experts can share the stage to learn and create
          together. We know the power of go-go music and we want to use it to
          restore the culture not exploit it.{' '}
        </div>
        <br></br> */}
        <img src="static/img/onstage.gif" class="gif" id="logos" />
        {/* Its not a hit until a go-go band remakes it! */}
      </div>
      <br></br>
      <br></br>
    </div>
  </div>
);

export default Index;
