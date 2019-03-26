import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts( ({ posts }) => {
  return (
    <div class="wrapper">
      <link rel="stylesheet" href="/static/css/styles.css" />

      {/* <img src="static/img/FLYER-TRANS.png" class="responsive"/> */}
      <img src="static/img/logocrank.png" class="flyerimage" />
      <img src="static/img/cash.png" class="cash"/>
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
        <div class="lineup">2002 FENWICK ST NW DC </div>
      </div>
      <div class="row">
      <br></br>
      <div class="row">
        <div class="tickets">TICKETS</div><br></br>
      </div>
        <form action="" method="get" class="rsvp-form">
          <div class="rsvp-form" action="https://chickenandmumbosauce.us13.list-manage.com/subscribe/post?u=ed6d4b4a06108687ea3bb3473&amp;id=66bc11430c" method="post">
            <label for="name">First Name: </label>
            <input type="text" name="name" id="name" placeholder="Name" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="name">Last Name: </label>
            <input type="text" name="name" id="name" placeholder="Name" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="email">Email Address: </label>
            <input type="email" name="email" id="email" placeholder="Email" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <input type="submit" value="RSVP!"/>
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