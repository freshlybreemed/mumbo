import React from 'react'

import withPost from 'nextein/post'

const Recap = () => {
    return(
        <div class="wrapper">
            <title>Recap</title>
            <div class="row"> 
                <img src="static/img/logocrank.png" class="cash"/>
                {/* <div class="row">
                    <div class="lineup">4-11-19 @ BIG CHIEF</div><br></br>
                </div>  */}
                <div class="row">
                    <div class="lineup">PHOTOS BY<a class="instalink" href="http://www.instagram.com/capturethecapital">@CAPTURETHECAPTIAL</a></div><br></br>
                </div>
                {/* untitled-10.jpg
<img src="static/img/cap-crank2-compressed/untitled-11.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-12.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-13.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-14.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-15.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-16.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-17.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-18.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-19.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-2.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-20.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-21.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-22.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-23.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-24.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-25.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-26.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-27.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-28.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-29.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-3.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-30.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-31.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-32.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-33.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-34.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-35.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-36.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-37.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-38.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-39.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-4.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-40.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-41.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-42.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-43.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-44.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-5.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-6.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-7.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-8.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled-9.jpg" class="reca["
<img src="static/img/cap-crank2-compressed/untitled.jpg" class="reca[" */}
                    <img src="static/img/capture/CAPTURE_3065.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3029-2.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3072.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3048.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2976.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3079.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3043.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2982.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3030.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3060-2.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2970.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2974.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3061.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2946.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3019.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3042.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2949.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2951.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3143.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2989.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3093.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3058.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3142.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3089.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2999.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2987.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3022.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3133.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3012.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2998.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3105.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3014-2.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2985.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2995.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3052.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3097.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2959.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3056.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3033.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2983.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3016.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3083.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3077.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3139-2.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3038.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3121.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3008.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3002.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3026.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_2944.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3107.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3130.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3028.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3006.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3083-2.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3035.jpg" class="recap"/>
                    <img src="static/img/capture/CAPTURE_3085.jpg" class="recap"/>
          
            </div>
         </div>
    )
    
}
export default Recap;