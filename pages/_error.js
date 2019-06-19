import React from 'react'

import withPost from 'nextein/post'

const Error = () => {
    return(
        <div class="wrapper">
            <title>Error :(</title>
            <div class="row"> 
                <img src="static/img/mumbogifblk.gif" class="cash"/>
                {/* <div class="row">
                    <div class="lineup">4-11-19 @ BIG CHIEF</div><br></br>
                </div>  */}
                <div class="row">
                    <div class="lineup">Not sure what you're looking for - but this aint it.</div><br></br>
                </div>
                <a href="/">
                    <button class="btn btn--right btn--tickets">GO BACK HOME</button>
                </a>
          
            </div>
         </div>
    )
    
}
export default Error;