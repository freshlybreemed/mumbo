import React, {Component} from 'react';
import withPosts from 'nextein/posts';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
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
            <div class="event-title">EVENTS</div>
            <div class="events-wrapper">
            
                <div class="media">
                    <div class="asset-mumbo">
                        {/* <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/12005/harbour1.jpg" alt="hot air balloons"/>     */}
                    </div>
                    <div class="content">
                        <h2 class="event-list__item__text--title" itemprop="performer">Chicken & Mumbo Sauce</h2>          
                        <p class="event-list__item__text--support">Mista Selecta, Dylan The Gypsy, CCB & more</p>          
                        <p class="event-list__item__text--info"></p>      
                        <p>Fri. July 5<meta itemprop="doorTime" content="9:00PM"/> </p>                                
                        <p>Doors @ 9:00pm<meta itemprop="doorTime" content="10:00PM"/> </p>                      
                        <p><meta itemprop="location" content="The 9:30 Club"/>9:30 Club, Washington, DC<meta itemprop="addressLocality" content="Silver Spring, MD"/></p>
                        <a href="https://www.ticketfly.com/purchase/event/1868235" title="Tickets for Chicken & Mumbo Sauce" target="_blank">
                            <button class="btn btn--right btn--tickets">TICKETS</button>
                        </a>
                    </div>
                </div>
            </div>
            <br></br>
            <div>
            <br></br>
            <Footer />
            </div>
        </div>
)

export default Events