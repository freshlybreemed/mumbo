import React from 'react';
import withPosts from 'nextein/posts';
import Navigation from '../components/Navigation'


const data = {
    title: 'About',
    header: "Hi, I'm Ebrima.",
  };

const content = `
Chicken & Mumbo Sauce is an event-based collective that specializes in producing unique and 
authentic experiences and content that reflect the creative community of the DMV.`

const About = () => (
        <div class="aboutpage">
            <title>About</title>
            <Navigation />
            <br></br>
            <br></br>
            <img src="static/img/mumbo.jpg" class="flyerimage" />
            {content} 
            <br></br>
            <img src="static/img/dylan_the_gypsy.jpg" class="aboutcolumn" />
            <img src="static/img/newimpressionz.png" class="aboutcolumn" />
            <img src="static/img/fresco.jpg" class="aboutcolumn" />

        </div>
    
)

export default About
