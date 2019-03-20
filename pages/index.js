import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts( ({ posts }) => {
  return (
    <div class="wrapper">
      <link rel="stylesheet" href="/static/css/styles.css" />

      <img src="static/img/FLYER-TRANS.png" class="responsive"/>
      <img src="static/img/logocrank.png" class="flyerimage" />
      <img src="static/img/cash.png" class="flyerimage"/>
      <div class="features"> 
        <div class="item">LIVE BAND</div> 
        <img class="yellow-star" src="static/img/yellowstar.png"></img>
        <div class="item">GO-GO KARAKOKE </div>
        <img class="yellow-star" src="static/img/yellowstar.png"></img>
        <div class="item">JAM SESSION</div>
      </div>
      <div class="info">
        <div class="title">BIG CHIEF</div>
      </div>
      <img src="static/img/mumbogifblk.gif" class="responsive" id="logos"/>
      
      <button>RSVP</button>

      {
        posts.map(post => <Content {...post} />)
      }
    </div>
  )
})