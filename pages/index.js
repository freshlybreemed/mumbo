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
  "IMG_9704.jpg",
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
      <img class="home-flag" src="static/img/CMS_930_Final_Text800.png"></img>
    </div>
    <br></br>
    <div class="recap-box">
      <div class="media">
        <img  class="asset-mumbo" src={pickAnImage(data)} alt="Chicken & Mumbo Sauce"/>    
        <div class="content">
            <h2 class="event-list__item__text--title" itemprop="performer">Chicken & Mumbo Sauce</h2>          
            <p class="event-list__item__text--support">Mista Selecta, Dylan The Gypsy, CCB & more</p>          
            <p class="event-list__item__text--info"></p>      
            <p>Fri. July 5<meta itemprop="doorTime" content="9:00PM"/> </p>                                
            <p>Doors @ 9:00pm<meta itemprop="doorTime" content="10:00PM"/> 18+ | $15</p>      
            <p>Back at it again with a few friends and new energy!! We set up shop at the 9:30 Club and we’ve brought some heavy hitters in just to secure the vibe at all times. 
              Our DJs will have you pop lock n droppin’ all night and not to mention DC's legendary CCB will be putting on one hella of a show. This night is nothing short of legendary and much more.         
            </p>                
            <a href="https://www.ticketfly.com/purchase/event/1868235" title="Tickets for Chicken & Mumbo Sauce" target="_blank">
                <button class="btn btn--right btn--tickets">TICKETS</button>
            </a>
        </div>
      </div>
      <br></br>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div class="row">
        <div class="tickets">WANT MORE MUMBO? <br></br>STAY HIP TO NEXT EVENT</div><br></br>
    </div> 
      
    <form action="https://chickenandmumbosauce.us13.list-manage.com/subscribe/post?u=ed6d4b4a06108687ea3bb3473&amp;id=a4855a812b" method="post" class="rsvp-form">
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
  