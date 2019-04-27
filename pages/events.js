import React from 'react';
import withPosts from 'nextein/posts';
import Navigation from '../components/Navigation'


const data = {
    title: 'About',
    header: "Hi, I'm Ebrima.",
  };

const content = `
Chicken & Mumbo Sauce is an event-based collective founded by 
DJ Breemz and Hav Mercy that specializes in producing unique and 
authentic experiences and content that reflect the ever-growing 
creative community and culture of the DMV onto the world.`

export default withPosts(() => {
    return(
        <div class="events">
            <Navigation />
            <br></br>
            <br></br>
            <div class="event"> 
                {content} 
            </div>
           
            <br></br>
            <div class="row">
                <div class="tickets">STAY HIP TO NEXT EVENT</div><br></br>
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
    )
})
