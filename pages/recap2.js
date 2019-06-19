import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
import withPost from 'nextein/post'

const Recap = () => {
    return(
        <div class="wrapper">
            <title>Recap</title>
            <Navigation />
            <div class="row"> 
                <img src="static/img/logocrank.png" class="cash"/>
                {/* <div class="row">
                    <div class="lineup">4-11-19 @ BIG CHIEF</div><br></br>
                </div>  */}
                <div class="row">
                    <div class="lineup">PHOTOS BY <a class="instalink" href="http://www.instagram.com/thatmanztyy">@THATMANZTYY</a></div><br></br>
                </div>
                    <img src="static/img/josef/img_7683jpg_48075616996_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7352jpg_48075703172_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7600jpg_48075716462_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7554jpg_48075605111_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7436jpg_48075639108_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7778jpg_48075728477_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7407jpg_48075705492_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7940jpg_48075646406_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7813jpg_48075628356_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7975jpg_48075754552_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8140jpg_48075704398_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7831jpg_48075669178_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8109jpg_48075663571_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7642jpg_48075654063_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8033jpg_48075694413_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7620jpg_48075719102_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7907jpg_48075640636_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7764jpg_48075727292_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7919jpg_48075642761_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7514jpg_48075707062_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8064jpg_48075699008_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_8011jpg_48075653926_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7822jpg_48075667818_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8102jpg_48075767052_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_8207jpg_48075713823_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7933jpg_48075750217_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7788jpg_48075625761_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7889jpg_48075676573_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8156jpg_48075705783_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7880jpg_48075673998_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7875jpg_48075739542_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8210jpg_48075780857_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7676jpg_48075615711_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7916jpg_48075642281_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7911jpg_48075640941_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8135jpg_48075770372_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7949jpg_48075647756_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7395jpg_48075704257_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8203jpg_48075674081_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7979jpg_48075689108_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7893jpg_48075743317_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7965jpg_48075685843_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8225jpg_48075678551_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_8149jpg_48075667231_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7708jpg_48075723832_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7537jpg_48075710057_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8243jpg_48075719158_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7544jpg_48075635893_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7724jpg_48075659058_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7628jpg_48075652978_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8111jpg_48075768442_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_8052jpg_48075658236_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7782jpg_48075662423_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8192jpg_48075671086_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_8221jpg_48075677306_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7596jpg_48075649538_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7493jpg_48075601721_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8042jpg_48075694863_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7993jpg_48075652211_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8239jpg_48075785217_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7611jpg_48075651413_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8197jpg_48075778192_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7743jpg_48075659818_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7533jpg_48075642338_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7606jpg_48075612376_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8213jpg_48075676976_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7793jpg_48075626631_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8130jpg_48075703388_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_8188jpg_48075708818_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7870jpg_48075739152_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7806jpg_48075665733_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8166jpg_48075707203_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7358jpg_48075599051_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7927jpg_48075644396_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7840jpg_48075631831_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7720jpg_48075657698_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7694jpg_48075722227_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8003jpg_48075690728_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7525jpg_48075603231_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7931jpg_48075749017_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7347jpg_48075636308_o.jpg" class="recap"/>   

                    <img src="static/img/josef/img_7563jpg_48075606401_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7816jpg_48075667398_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7775jpg_48075622971_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8223jpg_48075717258_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_8057jpg_48075697238_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_8022jpg_48075758577_o.jpg" class="recap"/>

                    <img src="static/img/josef/img_8116jpg_48075664556_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7856jpg_48075670508_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7897jpg_48075678033_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_7865jpg_48075633116_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8185jpg_48075669056_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_7574jpg_48075606891_o.jpg" class="recap"/>   
                    <img src="static/img/josef/img_8076jpg_48075700358_o.jpg" class="recap"/>
                    <img src="static/img/josef/img_8069jpg_48075660751_o.jpg" class="recap"/>

                <Footer />
            </div>
         </div>
    )
    
}
export default Recap;