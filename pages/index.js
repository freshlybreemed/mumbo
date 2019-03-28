import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts( ({ posts }) => {
  return (
    <div class="wrapper">
     <div class="row">
        <div class="lineup">CHICKEN & MUMBO SAUCE PRESENTS</div><br></br>
      </div>
      <img src="static/img/logocrank.png" class="flyerimage" />
      <img src="static/img/cash.gif" class="cash"/>
      <div class="features"> 
        <div class="item">LIVE BAND</div> 
        <img class="yellow-star" src="static/img/yellowstar.png"></img>
        <div class="item">GO-GO KARAKOKE </div>
        <img class="yellow-star" src="static/img/yellowstar.png"></img>
        <div class="item">JAM SESSION</div>
      </div>
      <div class="row">
        <div class="title">BIG CHIEF</div><br></br>
      </div>
      <div class="row">
        <div class="lineup">HOSTED BY: WALK LIKE WALT</div>
      </div>
      <div class="row">
        <div class="lineup">DJ SETS: MALCOLM XAVIER + FRESHLY BREEMED</div>
      </div>
      <div class="row">
        <div class="date">THURS. APRIL 11th</div>
      </div>
      <div class="row">
        <div class="date">9PM - 2AM</div>
      </div>
      <div class="row">
        <div class="lineup">2002 FENWICK ST NW DC 20002</div>
      </div>
      <div class="row">
      <br></br>
      <div class="row">
        <div class="tickets"><img class="yellow-star" src="static/img/yellowstar.png"/>
              THIS IS YOUR NIGHT 
          <img class="yellow-star" src="static/img/yellowstar.png"/>
        </div>
        <div class="tickets">
          <img class="yellow-star" src="static/img/yellowstar.png"/>
          TO BE LEAD MIC
          <img class="yellow-star" src="static/img/yellowstar.png"/>
        </div>
      </div> 
      <div class="row">
        <div class="about">
        Crank Karaoke is a one of a kind, improv jam session and open mic where the funky sounds of go-go collide with community to experience music together and express themselves freely. Featuring a live band of former go-go band musicians, look forward to a karaoke-inspired experience with a not-so-shy audience singing popular covers and renditions of culturally relevant songs. Essentially, it’s a party where beginners and experts can share the stage to learn and create together. We know the power of go-go music and we want to use it to restore the culture not exploit it.        </div>
        <br></br>
        <img src="static/img/onstage.gif"/>
      </div>
      <div class="row">
        <div class="tickets">TICKETS</div><br></br>
      </div> 
        <form action="https://chickenandmumbosauce.us13.list-manage.com/subscribe/post?u=ed6d4b4a06108687ea3bb3473&amp;id=66bc11430c" method="post" class="rsvp-form">
          <div class="rsvp-form" >
            <label for="name">First Name: </label>
            <input type="text" name="FNAME" id="name" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="name">Last Name: </label>
            <input type="text" name="LNAME" id="name" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="email">Email Address: </label>
            <input type="email" name="EMAIL" id="email" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <input type="submit" value="RSVP"/>
          </div>
        </form>
      {/* <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/> */}
    </div>
    <img src="static/img/mumbogifblk.gif" class="gif" id="logos"/>	
    {
      posts.map(post => <Content {...post} />)
    }
  </div>
  )
})