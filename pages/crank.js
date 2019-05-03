import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Navigation from '../components/Navigation'

export default withPosts( ({ posts }) => {
  return (
    <div class="wrapper">
      <Navigation />
    {/* <img class="background" src="/static/img/starts1.png" /> */}
     <div class="row">
        {/* <div class="lineup">CHICKEN & MUMBO SAUCE PRESENTS</div><br></br> */}
      </div>
      <img src="static/img/logocrank.png" class="flyerimage" />
      <div class="row">
      <br></br>
      <div class="row">
        <div class="about">
        Crank Karaoke is an improv jam session and open mic where the funky sounds of go-go collide with the community to experience something that has never been done before musically. Essentially, it's karaoke-inspired experience featuring a live band of former go-go band musicians. Pair that up with a not-so-shy audience singing to timeless go-go records, hip-hop/r&b covers and renditions. Join the party where beginners and experts can share the stage to learn and create together. We know the power of go-go music and we want to use it to restore the culture not exploit it.        </div>
        <br></br>
        <div class="rsvp-form">
          <form action="/recap">
              <input type="submit" value="PHOTO RECAP" />
          </form>
      </div>
        {/* Its not a hit until a go-go band remakes it! */}
      </div>
      <br></br>
      <div class="row">
        <div class="tickets">SIGN UP NOW FOR THE NEXT ONE</div><br></br>
      </div> 
        <form action="https://chickenandmumbosauce.us13.list-manage.com/subscribe/post?u=ed6d4b4a06108687ea3bb3473&amp;id=a4855a812b" method="post" class="rsvp-form">
          <div class="rsvp-form">
            <label for="email">Email Address: </label>
            <input type="email" name="EMAIL" id="email" required/>
          </div>
          <br></br>
          <br></br>
          <div class="rsvp-form">
            <input type="submit" value="STAMP"/>
          </div>
        </form>
    </div>
    <img src="static/img/karaokepooh.gif" class="gif" id="logos"/>	
    {
      posts.map(post => <Content {...post} />)
    }
  </div>
  )
})