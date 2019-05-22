import React from 'react'
import Navigation from '../components/Navigation'

import withPost from 'nextein/post'

const Confirmation = () => {
    // if (window != 'undefined') console.log(window)
    return (
    
    <div class>
        <Navigation />
        <img src="static/img/cash.gif" class="cash"/>
        <div class="tickets">Your Crank Has Been Confirmed</div><br></br>
        <div class="about">
            Your ticket has been sent to {'undefined' !== typeof email ? email : 'your email' } 
        </div>
        {/* <div class="ticketing-regular">SALE ENDS JUNE 14 </div> */}

    </div>
)}

export default Confirmation