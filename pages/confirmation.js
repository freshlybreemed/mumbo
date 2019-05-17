import React from 'react'
import Navigation from '../components/Navigation'

import withPost from 'nextein/post'

export default withPost( ({ post }) => { 
    var email = ''
    if ('undefined' !== typeof window){
        console.log(window.location)
        email = window.location.search.substring(7)
        console.log(email)

    }
    return(
    <div class="row">
        <Navigation />

        <img src="static/img/cash.gif" class="cash"/>
        <div class="tickets">Your Crank Has Been Confirmed</div><br></br>
        <div class="about">
            Your ticket has been sent to {'undefined' !== typeof email ? email : '' } 
        </div>
        <div class="ticketing-regular">SALE ENDS JUNE 14 </div>

    </div>
    )
    
} )