import React from 'react'
import Navigation from '../components/Navigation'

import withPost from 'nextein/post'

export default withPost( ({ post }) => { 
    return(
    <div class="row">
        <Navigation />
        <div class="lineup">Here's What Happened Last Time...</div><br></br>
        <center>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/nfpqSqiFJYc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/NRSTNqa9om4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </center>
        <div class="tickets">
        BOOK CHICKEN & MUMBO SAUCE
        </div>
        <br></br>
        <div class="lineup">
            Sponsored Events    |  Music Festivals  |   Colleges/Universities 
            <br></br>            <br></br>

            <input type="submit" value="CONTACT US"/>
        </div>
    </div>
    )
    
} )