import React from 'react'
import Navigation from '../components/Navigation'

import withPost from 'nextein/post'

const Confirmation = () => {
    // if (window != 'undefined') console.log(window)
    return (
    <div>
        <title>Crank Confirmation</title>
        <Navigation />
        <br></br>
        <img src="static/img/cash.gif" class="cash"/>
        <div class="signup">
        <div class="signup-band">CRANK CONFIRMATION</div>        
          <div >
              <p class="signup-songs">When your name is called, you have a two-minute time window to make it to the stage. Please note, signing up does not guarantee you will get to perform. If you miss your set, then your song may be given to someone else or we'll move on to the next participant. Multiple mics will be available so grab your squad and rock the show, groups are limited to 3 persons max. Turn up the crowd, perform your song, keep the party goin', shout-out your homies, your neighborhood etc. just have fun you got 4 minutes.
 </p>

          </div>
        </div>
        {/* <div class="ticketing-regular">SALE ENDS JUNE 14 </div> */}

    </div>
)}

export default Confirmation