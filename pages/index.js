import React from 'react'
import { Component } from "react";

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const data = [
  "DSC_4656.jpg",
  "DSC_5000.jpg",
  "DSC_5001.jpg",
  "IMG_9580.jpg",
  "IMG_9702.jpg",
  // "IMG_9704.jpg",
  "IMG_9787.jpg",
  "IMG_9929.jpg",
  "IMG_9934.jpg",
  "IMG_9938.jpg",
  "img_8192jpg_48075671086_o.jpg",
  "img_8213jpg_48075676976_o.jpg"
];
const pickAnImage = (array) => {
  var image = array[Math.floor(Math.random()*array.length)]
  console.log(image)
  return "static/img/930/"+image
}

const Index = () => (
  <div class="home">
  <title>Chicken & Mumbo Sauce</title>
  <Navigation />
    <div class="features"> 
      {/* <img class="home-flag" src="static/img/CMS_930_Final_Text800.png"></img> */}
    </div>
    <br></br>
    <div class="recap-box">
      
      <br></br>
    </div>
    <img class="gif" src="static/gif/uwem.gif"/>
    {/* <iframe class="gif"  src="https://giphy.com/embed/Kxt9b2WQPeRnW6dRxG" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe> */}
    <br></br>
    <br></br>
   
    <div class="row">
        <div class="tickets">WANT MORE MUMBO? <br></br>STAY HIP TO NEXT EVENT</div><br></br>
    </div> 
      
    <form action="https://chickenandmumbosauce.us3.list-manage.com/subscribe/post?u=b930e7c77036dd2a9685eb47e&amp;id=02c06b1c6e" method="post" class="rsvp-form">
        <div class="rsvp-form">
            <label for="email">Email Address: </label><br></br>
            <input class="signup-input" type="email" name="EMAIL" id="email" required/>
        </div>
            <button class="btn btn--right btn--tickets">STAMP</button>
        </form>
        <br></br>
      <footer><Footer /></footer>
  </div>
  )



export default Index;
  