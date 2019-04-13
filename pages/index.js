import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'

export default withPosts( ({ posts }) => {
  return (
    <div class="wrapper">
    {/* <img class="background" src="/static/img/starts1.png" /> */}
     <div class="row">
        <div class="lineup">CHICKEN & MUMBO SAUCE PRESENTS</div><br></br>
      </div>
      <img src="static/img/logocrank.png" class="flyerimage" />
      
 
      {/* <div class="row">
        <div class="lineup">DJ SETS: MALCOLM XAVIER + FRESHLY BREEMED</div>
      </div>
      <div class="row">
        <div class="date">THURS. APRIL 11th</div>
      </div>
      <div class="row">
        <div class="date">9PM - 2AM</div>
      </div> */}
      <div class="row">
      <br></br>
      {/* <div class="row">
        <div class="tickets"><img class="yellow-star" src="static/img/yellowstar.png"/>
              THIS IS YOUR NIGHT 
          TO BE LEAD MIC
          <img class="yellow-star" src="static/img/yellowstar.png"/>
        </div>
      </div>  */}
      <div class="row">
        <div class="about">
          First and foremost we’d like to thank the people for showing up and showing out last night! We stood and rocked out in solidarity as we shook the city up with #crankkaraoke. You can’t replicate it or mute DC. We R One and we’re here to stay. 
        </div>
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
        <div class="tickets">MISSED THE FIRST ONE? <br></br>SIGN UP NOW FOR THE NEXT ONE</div><br></br>
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
      {/* <link href="//cdn-images.mailchimp.com/embedcode/classic-10_7.css" rel="stylesheet" type="text/css"/> */}
    </div>
    <img src="static/img/mumbogifblk.gif" class="gif" id="logos"/>	
    {
      posts.map(post => <Content {...post} />)
    }
  </div>
  )
})