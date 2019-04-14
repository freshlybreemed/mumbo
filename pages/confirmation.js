import React from 'react'

import withPost from 'nextein/post'

export default withPost( ({ post }) => { 
    return(
    <div class="row">
        <img src="static/img/cash.gif" class="cash"/>
        <div class="tickets">Email Confirmed!</div><br></br>
    </div>
    )
    
} )