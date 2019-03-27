import React from 'react'

import withPost from 'nextein/post'

export default withPost( ({ post }) => { 
    return(
        // <div class="wrapper">

            <div class="row">
                <img src="static/img/cash.png" class="cash"/>
                <div class="tickets">RSVP Confirmed!</div><br></br>
            </div>
        // </div>
    )
    
} )