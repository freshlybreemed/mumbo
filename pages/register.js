import React from 'react'
import Navigation from '../components/Navigation'

import withPost from 'nextein/post'

const Confirmation = () => {
    // if (window != 'undefined') console.log(window)
    return (
    
    <div class>
        <title>Crank Confirmation</title>
        <Navigation />
        <img src="static/img/cash.gif" class="cash"/>
        <div class="tickets">Thanks for signing up!</div><br></br>
        <div class="about">
            {/* Your ticket will be sent to {'undefined' !== typeof window ? window.location.search.substring(7) : 'your email' } shortly */}
        </div>
        {/* <div class="ticketing-regular">SALE ENDS JUNE 14 </div> */}

    </div>
)}

export default Confirmation