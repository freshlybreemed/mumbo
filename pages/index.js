import React from 'react'
import { Component } from "react";

import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      images: [
        "CAPTURE_2944.jpg",
        "CAPTURE_2946.jpg",
        "CAPTURE_2949.jpg",
        "CAPTURE_2951.jpg",
        "CAPTURE_2959.jpg",
        "CAPTURE_2970.jpg",
        "CAPTURE_2974.jpg",
        "CAPTURE_2976.jpg",
        "CAPTURE_2982.jpg",
        "CAPTURE_2983.jpg",
        "CAPTURE_2985.jpg",
        "CAPTURE_2987.jpg",
        "CAPTURE_2989.jpg",
        "CAPTURE_2995.jpg",
        "CAPTURE_2998.jpg",
        "CAPTURE_2999.jpg",
        "CAPTURE_3002.jpg",
        "CAPTURE_3006.jpg",
        "CAPTURE_3008.jpg",
        "CAPTURE_3012.jpg",
        "CAPTURE_3014-2.jpg",
        "CAPTURE_3016.jpg",
        "CAPTURE_3019.jpg",
        "CAPTURE_3022.jpg",
        "CAPTURE_3026.jpg",
        "CAPTURE_3028.jpg",
        "CAPTURE_3029-2.jpg",
        "CAPTURE_3030.jpg",
        "CAPTURE_3033.jpg",
        "CAPTURE_3035.jpg",
        "CAPTURE_3038.jpg",
        "CAPTURE_3042.jpg",
        "CAPTURE_3043.jpg",
        "CAPTURE_3048.jpg",
        "CAPTURE_3052.jpg",
        "CAPTURE_3056.jpg",
        "CAPTURE_3058.jpg",
        "CAPTURE_3060-2.jpg",
        "CAPTURE_3061.jpg",
        "CAPTURE_3065.jpg",
        "CAPTURE_3072.jpg",
        "CAPTURE_3077.jpg",
        "CAPTURE_3079.jpg",
        "CAPTURE_3083-2.jpg",
        "CAPTURE_3083.jpg",
        "CAPTURE_3085.jpg",
        "CAPTURE_3089.jpg",
        "CAPTURE_3093.jpg",
        "CAPTURE_3097.jpg",
        "CAPTURE_3105.jpg",
        "CAPTURE_3107.jpg",
        "CAPTURE_3121.jpg",
        "CAPTURE_3127.jpg",
        "CAPTURE_3130.jpg",
        "CAPTURE_3133.jpg",
        "CAPTURE_3139-2.jpg",
        "CAPTURE_3142.jpg",
        "CAPTURE_3143.jpg",
      ]
    }
    this.pickAnImage = this.pickAnImage.bind(this)
  }
  pickAnImage(){
    console.log(this.state.images[Math.floor(Math.random()*this.state.images.length)])
    return "static/img/capture/"+this.state.images[Math.floor(Math.random()*this.state.images.length)]
  }
  render(){
    return(

      <div class="home">
      <title>Chicken & Mumbo Sauce</title>
      <Navigation />
        {/* <img src="static/img/logocrank.png" class="flyerimage" /> */}
        {/* <img src="static/img/cash.gif" class="cash"/> */}
        <div class="features"> 
          {/* <div class="item">LIVE BAND</div>  */}
          <img class="home-flag" src={this.pickAnImage()}></img>
       
          {/* <div class="item">GO-GO KARAKOKE </div>
          <img class="yellow-star" src="static/img/yellowstar.png"></img>
          <div class="item">JAM SESSION</div> */}
        </div>
        <br></br>
        <div class="recap-box">
          <div class="shows-header">CRANK KARAOKE FLICKS:</div>
        <a href="/recap">
            <button class="btn btn--right btn--tickets">IN THE BOOTH</button>
          </a>
          <a href="/recap2">
            <button class="btn btn--right btn--tickets">IN THE FIELD PT. 1</button>
          </a>
          <a href="/recap3">
            <button class="btn btn--right btn--tickets">IN THE FIELD PT. 2</button>
          </a>
        </div>
        <br></br>
        <br></br>
        <div class="recap-box">
        <div class="shows-header">UPCOMING SHOWS:</div>
        <a href="/events">
              <img src="static/img/mumbo930.png" />
            </a>
        </div>
  
        <br></br>
        <div class="row">
            <div class="tickets">WANT MORE MUMBO? <br></br>STAY HIP TO NEXT EVENT</div><br></br>
        </div> 
          
        <form action="https://chickenandmumbosauce.us13.list-manage.com/subscribe/post?u=ed6d4b4a06108687ea3bb3473&amp;id=a4855a812b" method="post" class="rsvp-form">
            <div class="rsvp-form">
                <label for="email">Email Address: </label><br></br>
                <input class="signup-input" type="email" name="EMAIL" id="email" required/>
            </div>
            {/* <br></br> */}
                <button class="btn btn--right btn--tickets">STAMP</button>
            </form>
            <br></br>

          <footer>
            <Footer />
            </footer>
            <br></br>


    </div>
    )
  }
}

export default Index;
  