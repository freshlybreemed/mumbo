import React from 'react'
import { Component } from "react";
import axios from 'axios'
import Navigation from '../components/Navigation'

class Karaoke extends Component {
    constructor(props) {
        super(props);
        this.state = {
            karaokeSongs: []
          }
          
        this.getSongs = this.getSongs.bind(this);
        this.renderSongs = this.renderSongs.bind(this);
      }
      componentDidMount(){
        this.getSongs()
      }
      async getSongs(){
        await axios.get('/songs').then((songs)=>{
          var karaokeSongs = songs.data.users
          karaokeSongs.sort(function(a, b) {
            var nameA=a.artist.toLowerCase(), nameB=b.artist.toLowerCase()
              if (nameA < nameB) //sort string ascending
                  return -1 
              if (nameA > nameB)
                  return 1
              return 0 //default return value (no sorting)
          });
    
          var karaokeSongs = karaokeSongs.filter(song=> typeof song.email !== 'undefined')
          console.log(karaokeSongs)
          this.setState({
            karaokeSongs: karaokeSongs
          },()=> console.log(this.state.karaokeSongs))
        }).catch(err=>{
          console.log(err)
        })
      }
      renderSongs(){
        this.state.karaokeSongs.forEach(songs=>{
          console.log(songs)
        })
        var songRender = []
        this.state.karaokeSongs.forEach((song, ind)=>{
            songRender.push( 
            <div class="media">
                <div class="ticket-content">
                    <h2 class="karaoke-list__item__text--title" itemprop="performer">{song.firstName + " from "+ song.city}</h2>          
                    <p class="karaoke-list__item__text--support">{"@"+song.handle}</p> 
                    <p class="manage-list__item__text--info"> {song.artist + " - " + song.song}</p>  
                </div>
            </div>
            )
      })
      return songRender

    }
  
  render() {

    return (
    <div>
      {/* <div class="media"> */}
      {this.renderSongs()}
    {/* </div> */}
  </div>
)
    }
  }
export default Karaoke