import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts( ({ posts }) => {
  return (
    <div class="wrapper">
      <link rel="stylesheet" href="/static/css/styles.css" />

      {/* <img src="static/img/FLYER-TRANS.png" class="responsive"/> */}
      <img src="static/img/logocrank.png" class="flyerimage" />
      <img src="static/img/cash.png" class="flyerimage"/>
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

      <img src="static/img/mumbogifblk.gif" class="gif" id="logos"/>
      
      <button>RSVP</button>

      {
        posts.map(post => <Content {...post} />)
      }
    </div>
  )
})