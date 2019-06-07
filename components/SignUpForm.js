import React from 'react'
import { Component } from "react";
import axios from 'axios'
import Navigation from '../components/Navigation'

class SignUpForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            FNAME: '',
            EMAIL: '',
            LNAME: '',
            HANDLE: '',
            SONG: '',
            SONGS: [
              { 
                "Backyard Band" : ["Keep It Gangsta (96 Dope Jam)", " 98 Dope Jam ", " Sick Of Being Lonely / T Shirt", " Skillet", " Unibomer", " Still Ray", " Fakin Like.."],
                "New Impressions" : [ "Take My Breath Away", " Found Myself A Clappa", " Pick It Up", " Strip Girl", " Pop Your P****y"],
                "Reaction Band" : ["Gucci Bandana", " Clapping Song", " Feels Good", " Snap Ya Fingerz", " Shawty ", "She can get it"],
                "UCB" : ["Sexy Lady", " VSOP", " Splash Girl"],
                "CCB" : ["Bazooka Bottom", " Hennessy", " Smiley Girl ( Can You Handle It)", " My Phatty", " Roll Call"],
                "TCB" : ["Chiggy Bum", " I Want A Girl", " Ass Clap", " Bust It Wide Open ", "Pole Party", "  2005 ( Wipe Me Down)"],
                "MOB" : ["Bring Em Out", " Don’t Be mad","100 Guns 100 Clips"], 
                "ABM" : ["Knock It Out", " Shawty Bop/ Chop ", " Can't Feel My Face", " Slow Bounce Time"],
                "TOB" : ["Bouncing To Dis ", " Before I Let Go", " Take Me There"],
                "XIB" : ["Booty Bounce ", " Whoo Lawd ", " Super Freak", " Im In The Kitchen"],
              },
              {
                "New Impressions": ["Whistle", "Don't Say You Will", "Comfortable"],
                "TCB": ["Bait"],
                "Renegade": ["Jamaica", "Superstar Lady"],
                "CCB": ["Fight Anthem"],
                "Black Liberty": ["Telephone Luv"],
                "XIB" : ["Panty Droppa", "My Last Words"],
                "Nexx Level": ["Bounce", "Ladies Paradise", "Phat Booty"],
                "Rare Essense": ["Overnight Scenario", "Pieces Of Me"],
                "Backyard Band" : ["Thug Passion"],
                "TOB": ["Bum Joint"],
                "EU": ["Da B.U.T.T."],
                "CIB": ["Backseat Action"],
                "Reaction Band": ["Dump Truck"],
                "Gameova Band": ["Nasty Time","Private Places"],
                "UEB": ["Speeding", "Butt Cheeks"],
                "All Starz" : ["Hands In The Air", "Reggaeton"],
                "AAO": ["Clappin time", "Pop that pussy", "Shake That Ass"],
                "New Vision": ["07 Boyshorts"],
                "Dreamteam": ["All Back", "Wet","Sure Thing"]
              }
            ]
          }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
      }
      handleChange(e) {
        console.log(e)
        if (e.target.name =='FNAME')
            this.setState({FNAME: e.target.value}, () =>{
                console.log(this.state.FNAME)
            });
        if (e.target.name =='LNAME')
        this.setState({LNAME: e.target.value}, () =>{
            console.log(this.state.LNAME)
        });
        if (e.target.name =='EMAIL')
        this.setState({EMAIL: e.target.value}, () =>{
            console.log(this.state.EMAIL)
        });
        if (e.target.name =='SONG')
        this.setState({SONG: e.target.value}, () =>{
            console.log(this.state.SONG)
        });
      }
    handleSubmit(e) {
        e.preventDefault();
        const headers = {
            'Authorization': 'Token 564db0117b8a65ddd60271eaf3298aa4',
            'Content-Type': 'application/json',
        }
        axios({
                method: 'post',
                url: '/ticket',
                data: {
                    "ticket": { 
                        "event_ticket_type_id": 26926,
                        "name": this.state.FNAME + ' ' + this.state.LNAME,
                        "email": this.state.EMAIL,
                        "dispatch": true
                    }
                },
                headers: headers
              }).then((res) => {
                console.log("RESPONSE RECEIVED: ", res);
              })
              .catch((err) => {
                console.log("AXIOS ERROR: ", err);
              })
              window.location.href = "/confirmation";
      }
  
  
  render() {
    // const songs = this.state.SONGS[0]
    // let renderSongs = ''
    // for (let [key, value] of Object.entries(songs)){
    //   for (let [band, song] of Object.entries(value)){
    //     console.log(key + ' ' + song)
    //     return (
    //       <div>
    //         <input type="radio" id="dewey" name="drone" value={song}/>
    //         <label for="dewey">{song}</label>
    //       </div>
    //       )
    //     }
    // }
    let content = ``
    return (
    <div>
      <div class="about">
      <form action="https://chickenandmumbosauce.us13.list-manage.com/subscribe/post?u=ed6d4b4a06108687ea3bb3473&amp;id=a4855a812b" method="post" class="rsvp-form">
          <div class="rsvp-form" >
            <label for="name">First Name: </label>
            <input type="text"  value={this.state.FNAME} onChange={this.handleChange} name="FNAME" id="name" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="name">Last Name: </label>
            <input type="text" value={this.state.LNAME} onChange={this.handleChange} name="LNAME" id="name" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="email">Email Address: </label>
            <input type="email" value={this.state.EMAIL} onChange={this.handleChange} name="EMAIL" id="email" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="email">Twitter/Instagram @'s': </label>
            <input type="email" value={this.state.HANDLE} onChange={this.handleChange} name="HANDLE" id="handle"/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="name">What Song From The List Would You Like To Perform? </label>
            <input type="text" value={this.state.SONG} onChange={this.handleChange} name="SONG" id="name" required/>
          </div>
          <br></br>
                <button class="btn btn--right btn--tickets">SIGN UP</button>
        </form>
      </div>
  </div>
)
    }
  }
export default SignUpForm