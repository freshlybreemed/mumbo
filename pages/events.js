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
            
            <div class="event-title">EVENTS</div>
            <div class="events-wrapper">
                <div class="media">
                    <div class="asset-crank">
                        {/* <img src="static/img/CRANK-event.png" alt="hot air balloons"/> */}
                    </div>
                    <div class="content">
                        <h2 class="event-list__item__text--title" itemprop="performer">Crank Karaoke</h2>          
                        <p class="event-list__item__text--support">Live Band, Go-Go Karaoke and Jam Session</p>          
                        <p class="event-list__item__text--info"></p>    
                        <p>Fri. June 14<meta itemprop="doorTime" content="9:00PM"/> </p>                            
                        <p>9:00pm<meta itemprop="doorTime" content="9:00PM"/> / 21+ </p>                      
                        <p><meta itemprop="location" content="The Fillmore"/>Howard Theatre, Washington, DC<meta itemprop="addressLocality" content="Silver Spring, MD"/></p>
                        <a href="/crank" title="Tickets for Crank Karaoke" target="_blank">
                            <button class="btn btn--right btn--tickets">TICKETS</button>
                        </a>
                        {/* <div class="events-ticket-button" >
                            <input type="submit" value="TICKETS"/>
                        </div> */}
                    </div>
                </div>
                <div class="media">
                    <div class="asset-mumbo">
                        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg" alt="hot air balloons"/>     */}
                    </div>
                    <div class="content">
                        <h2 class="event-list__item__text--title" itemprop="performer">Chicken & Mumbo Sauce</h2>          
                        <p class="event-list__item__text--support">Mista Selecta, Dylan The Gypsy, CCB & more</p>          
                        <p class="event-list__item__text--info"></p>      
                        <p>Fri. July 5<meta itemprop="doorTime" content="9:00PM"/> </p>                                
                        <p>10:00pm<meta itemprop="doorTime" content="10:00PM"/> / 21+ </p>                      
                        <p><meta itemprop="location" content="The Fillmore"/>9:30 Club, Washington, DC<meta itemprop="addressLocality" content="Silver Spring, MD"/></p>
                        <a href="https://www.ticketfly.com/purchase/event/1868235" title="Tickets for Chicken & Mumbo Sauce" target="_blank">
                            <button class="btn btn--right btn--tickets">ON SALE 7/13</button>
                        </a>
                    </div>
                </div>
            </div>
            <br></br>
            <div class="row">
                <div class="tickets">WANT MORE MUMBO? <br></br>STAY HIP TO NEXT EVENT</div><br></br>
            </div> 
            <form action="https://chickenandmumbosauce.us13.list-manage.com/subscribe/post?u=ed6d4b4a06108687ea3bb3473&amp;id=a4855a812b" method="post" class="rsvp-form">
            <div class="rsvp-form">
                <label for="email">Email Address: </label>
                <input class="signup-input" type="email" name="EMAIL" id="email" required/>
            </div>
            <br></br>
            <br></br>
                <button class="btn btn--right btn--tickets">STAMP</button>
            </form>

        </div>
)
export default Events