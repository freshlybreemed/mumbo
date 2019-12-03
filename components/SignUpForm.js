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
            CITY: '',
            HANDLE: '',
            SONG: '',
            SELECTED_SONG: '',
            ARTIST: 'Not set yet',
            SONGS: []
              // ,
              // {
              //   "New Impressions": ["Whistle", "Don't Say You Will", "Comfortable"],
              //   "TCB": ["Bait"],
              //   "Renegade": ["Jamaica", "Superstar Lady"],
              //   "CCB": ["Fight Anthem"],
              //   "Black Liberty": ["Telephone Luv"],
              //   "XIB" : ["Panty Droppa", "My Last Words"],
              //   "Nexx Level": ["Bounce", "Ladies Paradise", "Phat Booty"],
              //   "Rare Essense": ["Overnight Scenario", "Pieces Of Me"],
              //   "Backyard Band" : ["Thug Passion"],
              //   "TOB": ["Bum Joint"],
              //   "EU": ["Da B.U.T.T."],
              //   "CIB": ["Backseat Action"],
              //   "Reaction Band": ["Dump Truck"],
              //   "Gameova Band": ["Nasty Time","Private Places"],
              //   "UEB": ["Speeding", "Butt Cheeks"],
              //   "All Starz" : ["Hands In The Air", "Reggaeton"],
              //   "AAO": ["Clappin time", "Pop that pussy", "Shake That Ass"],
              //   "New Vision": ["07 Boyshorts"],
              //   "Dreamteam": ["All Back", "Wet","Sure Thing"]
              // }
            // ]
          }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.getSongs = this.getSongs.bind(this);
        this.renderSongs = this.renderSongs.bind(this);
      }
      componentDidMount(){
        this.getSongs()
      }
      async getSongs(){
        await axios.get('/karaokesongs').then((songs)=>{
          console.log(songs)
          var karaokeSongs = songs.data.users
          karaokeSongs.sort(function(a, b) {
            var nameA=a.artist.toLowerCase(), nameB=b.artist.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
              if (nameA > nameB)
                  return 1
              return 0 //default return value (no sorting)
          });
          var availableSongs = karaokeSongs.filter(song=> typeof song.email === 'undefined')
          this.setState({
            SONGS: availableSongs
          })
        }).catch(err=>{
          console.log(err)
        })
      }
      renderSongs(){
        var songRender = []
        for (var track in this.state.SONGS){
          var artist = this.state.SONGS[track]['artist']
          var song  = this.state.SONGS[track]['song']
          songRender.push(artist + ' - ' + song)
        }
        return songRender
      }
      handleChange(e) {
        console.log(e)
        if (e.target.name =='FNAME')
            this.setState({FNAME: e.target.value}, () =>{
                console.log(this.state.FNAME)
            });
        if (e.target.name =='CITY')
        this.setState({CITY: e.target.value}, () =>{
            console.log(this.state.CITY)
        });
        if (e.target.name =='EMAIL')
        this.setState({EMAIL: e.target.value}, () =>{
            console.log(this.state.EMAIL)
        });
        if (e.target.name =='HANDLE')
        this.setState({HANDLE: e.target.value}, () =>{
            console.log(this.state.HANDLE)
        });
        if (e.target.name =='SONG')
        this.setState({
          SONG: e.target.value,
          SELECTED_SONG: e.target.value.split(' - ')[1],
          ARTIST: e.target.value.split(' - ')[0]
        }, () =>{
            // console.log()
            console.log(this.state.SONG)
        });
      }
    async handleSubmit(e) {
        e.preventDefault();
        await axios({
          method: 'post',
          url: '/create',
          data: {
            artist: this.state.ARTIST,
            song: this.state.SONG,
            email: this.state.EMAIL,
            song: this.state.SELECTED_SONG,
            firstName: this.state.FNAME,
            city: this.state.CITY,
            handle: this.state.HANDLE
          }
        }).then((res) => {
          console.log("RESPONSE RECEIVED: ", res);
          window.location.href = "/songconfirm";
        })
        .catch((err) => {
          console.log("AXIOS ERROR: ", err);
          window.location.href = "/signup";
        })
      }
  
  
  render() {

    return (
    <div>
      <div class="about">
      <form class="rsvp-form">
          <div class="rsvp-form" >
            <label for="name">Name: </label><br></br>
            <input class="signup-input"type="text"  value={this.state.FNAME} onChange={this.handleChange} name="FNAME" id="name" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="email">Email Address: </label><br></br>
            <input class="signup-input" type="email" value={this.state.EMAIL} onChange={this.handleChange} name="EMAIL" id="email" required/>
          </div>

          <br></br>
          <div class="rsvp-form">
            <label for="name">Where You From?: </label><br></br>
            <input class="signup-input" type="text" value={this.state.CITY} onChange={this.handleChange} name="CITY" id="city" required/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="email">IG or Twitter @: </label><br></br>
            <input class="signup-input" type="text" value={this.state.HANDLE} onChange={this.handleChange} name="HANDLE" id="handle"/>
          </div>
          <br></br>
          <div class="rsvp-form">
            <label for="name">What Song Would You Like To Perform? </label>
            <br></br>
            <select value={this.state.SONG} name="SONG" id="name" onChange={this.handleChange} >
              <option value="idk">Select Song</option>
              {this.renderSongs().map(song=> <option value={song}>{song}</option>)}
            </select>
            {/* <input class="signup-input" type="text" onChange={this.handleChange} name="SONG" id="name" required/> */}
          </div>
          <br></br>
                <button onClick={this.handleSubmit} class="btn btn--right btn--tickets">SIGN UP</button>
        </form>
      </div>
  </div>
)
    }
  }
export default SignUpForm