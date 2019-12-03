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
                    <div class="lineup">PHOTOS BY<a class="instalink" href="http://www.instagram.com/jadaimanim">@JADAIMANIM</a></div><br></br>
                </div>
                <img src="static/img/jada-crank2-compressed/700A0396.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0384.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0260.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0277.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0229.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0451.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0522.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0642.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0327.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0235.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0230.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0187.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0349.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0239.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0482.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0167.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0639.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0265.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0572.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0253.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0515.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0345.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0603.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0322.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0564.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0195.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0232.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0532.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0607.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0386.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0513.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0554.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0471.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0596.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0348.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0625.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0611.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0436.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0478.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0180.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0185.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0186.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0174.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0233.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0622.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0135.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0601.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0151.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0330.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0584.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0462.jpg" class="recap" />

                <img src="static/img/jada-crank2-compressed/700A0287.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0382.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0563.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0138.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0496.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0343.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0251.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0447.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0334.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0237.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0403.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0389.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0139.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0499.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0547.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0241.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0181.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0629.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0585.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0131.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0190.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0257.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0221.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0574.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0244.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0145.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0375.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0527.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0246.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0143.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0408.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0498.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0215.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0364.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0347.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0405.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0374.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0360.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0502.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0286.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0583.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0594.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0494.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0581.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0342.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0420.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0362.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0313.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0225.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0487.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0474.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0619.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0240.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0529.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0383.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0295.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0392.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0429.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0394.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0459.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0530.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0318.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0208.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0171.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0326.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0147.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0505.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0172.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0346.jpg" class="recap" />
                <img src="static/img/jada-crank2-compressed/700A0352.jpg" class="recap" />
            </div>
         </div>
    )
    
}
export default Recap;