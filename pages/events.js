import React, { Component } from 'react';
import withPosts from 'nextein/posts';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Event from '../components/Event';

const data = [
  'DSC_4656.jpg',
  'DSC_5000.jpg',
  'DSC_5001.jpg',
  'IMG_9580.jpg',
  'IMG_9702.jpg',
  'IMG_9704.jpg',
  'IMG_9787.jpg',
  'IMG_9934.jpg',
  'IMG_9938.jpg',
  'img_8192jpg_48075671086_o.jpg',
  'img_8213jpg_48075676976_o.jpg',
];
const pickAnImage = array => {
  var image = array[Math.floor(Math.random() * array.length)];
  console.log(image);
  return image;
};
const content = `
Chicken & Mumbo Sauce is an event-based collective founded by 
DJ Breemz and Hav Mercy that specializes in producing unique and 
authentic experiences and content that reflect the ever-growing 
creative community and culture of the DMV onto the world.`;

const Events = () => (
  <div class="home">
    <div class="events">
      <title>Events</title>
      <Navigation />
      <div class="event-title">EVENTS</div>
      {/* <div class="events-wrapper"> */}
      {/* <div class="media">
          <div
            class="asset-mumbo"
            style={{
              backgroundImage:
                'url(' + 'static/img/img_1247jpg_48752083393_o.jpg',
            }}
          ></div>
          <div class="content">
            <h2 class="event-list__item__text--title" itemprop="performer">
              Crank Karaoke
            </h2>
            <p class="event-list__item__text--support">
              Hosted by Walk Like Walt + DJ Alizay
            </p>
            <p class="event-list__item__text--info"></p>
            <p>
              Thur. Dec 26
              <meta itemprop="doorTime" content="9:00PM" />{' '}
            </p>
            <p>
              Doors @ 9:00pm
              <meta itemprop="doorTime" content="10:00PM" />
            </p>
            <p>
              <meta itemprop="location" content="The 9:30 Club" />U St. Music
              Hall, Washington, DC
              <meta itemprop="addressLocality" content="Washington, DC" />
            </p>
            <a
              href="https://www.bigneon.com/tickets/crank-karaoke-washington"
              title="Tickets for Crank Karaoke"
              target="_blank"
            >
              <button class="btn btn--right btn--tickets">TICKETS</button>
            </a>
          </div>
        </div>
      </div> */}
      There are no upcoming events at this time :(
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
    <div class="row">
      <div class="tickets">
        WANT MORE MUMBO? <br></br>STAY HIP TO OUR NEXT EVENT
      </div>
      <br></br>
    </div>
    <form
      action="https://chickenandmumbosauce.us3.list-manage.com/subscribe/post?u=b930e7c77036dd2a9685eb47e&amp;id=02c06b1c6e"
      method="post"
      class="rsvp-form"
    >
      <div class="rsvp-form">
        <label for="email">Email Address: </label>
        <br></br>
        <input
          class="signup-input"
          type="email"
          name="EMAIL"
          id="email"
          required
        />
      </div>
      <button class="btn btn--right btn--tickets">STAMP</button>
    </form>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Events;
