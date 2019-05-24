import React, {Component} from 'react';
import withPosts from 'nextein/posts';
import Navigation from '../components/Navigation'
import Event from '../components/Event'


const data = {
    title: 'About',
    header: "Hi, I'm Ebrima.",
  };

const content = `
Chicken & Mumbo Sauce is an event-based collective founded by 
DJ Breemz and Hav Mercy that specializes in producing unique and 
authentic experiences and content that reflect the ever-growing 
creative community and culture of the DMV onto the world.`

const Events = () => (
        <div class="events">
            <title>Events</title>
            <Navigation />
            {/* <script src="https://www.paypalobjects.com/api/checkout.js"></script> */}
            <br></br>
            <br></br>
            <div class="event">  
                <Event />
            </div>
            {/* <script src="https://www.paypal.com/sdk/js?client-id=sb"></script> */}
            {/* <script src="static/js/paypal.js"></script> */}

            {/* <br></br>  <div id="paypal-button-container"/> */}

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
export default Events