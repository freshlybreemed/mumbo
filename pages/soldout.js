import React from 'react'
import Navigation from '../components/Navigation'
import Link from 'next/link';

import withPost from 'nextein/post'

const SoldOut = () => {
    // if (window != 'undefined') console.log(window)
    return (
    
    <div class>
        <title>Sold Out</title>
        <Navigation />
        <img src="static/img/cash.gif" class="cash"/>
        <div class="tickets">Free RSVPs Sold out</div><br></br>
        <div class="about">
            And your blown! 
            <br></br>
        </div>
        <div class="about">

            <form action="/tickets">
                <input type="submit" value="TICKETS"/>
          </form>        </div>
        {/* <div class="ticketing-regular">SALE ENDS JUNE 14 </div> */}

    </div>
)}

export default SoldOut