import React from 'react';
import { Component } from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

let crank = [
  <img
    src="static/img/josef-crank-compressed/img_0847jpg_48740772276_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0857jpg_48740957802_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0874jpg_48740958157_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0881jpg_48740445653_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0909jpg_48740774496_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0915jpg_48740774886_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0923jpg_48740960492_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0950jpg_48740448033_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0958jpg_48740961482_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0961jpg_48740448983_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0970jpg_48740962842_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0982jpg_48740778311_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0984jpg_48740778716_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_0987jpg_48740451198_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1004jpg_48740964852_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1011jpg_48740965142_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1033jpg_48740453718_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1037jpg_48740782096_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1046jpg_48740455113_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1052jpg_48740968067_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1062jpg_48740457288_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1069jpg_48740970147_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1086jpg_48740970767_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1092jpg_48740459043_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1095jpg_48740460023_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1099jpg_48740460388_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1108jpg_48740460923_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1110jpg_48740788816_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1112jpg_48740789156_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1114jpg_48740789506_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1122jpg_48740790001_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1125jpg_48740463023_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1132jpg_48740975612_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1139jpg_48740975932_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef-crank-compressed/img_1146jpg_48740976327_o.jpg"
    class="home-image"
  />,

  <img
    src="static/img/josef/img_7683jpg_48075616996_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7352jpg_48075703172_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7600jpg_48075716462_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7554jpg_48075605111_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7436jpg_48075639108_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7778jpg_48075728477_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7407jpg_48075705492_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7940jpg_48075646406_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7813jpg_48075628356_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7975jpg_48075754552_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8140jpg_48075704398_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7831jpg_48075669178_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8109jpg_48075663571_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7642jpg_48075654063_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8033jpg_48075694413_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7620jpg_48075719102_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7907jpg_48075640636_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7764jpg_48075727292_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7919jpg_48075642761_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7514jpg_48075707062_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8064jpg_48075699008_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8011jpg_48075653926_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7822jpg_48075667818_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8102jpg_48075767052_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8207jpg_48075713823_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7933jpg_48075750217_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7788jpg_48075625761_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7889jpg_48075676573_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8156jpg_48075705783_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7880jpg_48075673998_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7875jpg_48075739542_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8210jpg_48075780857_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7676jpg_48075615711_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7916jpg_48075642281_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7911jpg_48075640941_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8135jpg_48075770372_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7949jpg_48075647756_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7395jpg_48075704257_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8203jpg_48075674081_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7979jpg_48075689108_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7893jpg_48075743317_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7965jpg_48075685843_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8225jpg_48075678551_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8149jpg_48075667231_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7708jpg_48075723832_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7537jpg_48075710057_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8243jpg_48075719158_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7544jpg_48075635893_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7724jpg_48075659058_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7628jpg_48075652978_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8111jpg_48075768442_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8052jpg_48075658236_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7782jpg_48075662423_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8192jpg_48075671086_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8221jpg_48075677306_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7596jpg_48075649538_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7493jpg_48075601721_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8042jpg_48075694863_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7993jpg_48075652211_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8239jpg_48075785217_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7611jpg_48075651413_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8197jpg_48075778192_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7743jpg_48075659818_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7533jpg_48075642338_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7606jpg_48075612376_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8213jpg_48075676976_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7793jpg_48075626631_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8130jpg_48075703388_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8188jpg_48075708818_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7870jpg_48075739152_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7806jpg_48075665733_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8166jpg_48075707203_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7358jpg_48075599051_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7927jpg_48075644396_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7840jpg_48075631831_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7720jpg_48075657698_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7694jpg_48075722227_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8003jpg_48075690728_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7525jpg_48075603231_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7931jpg_48075749017_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7347jpg_48075636308_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7563jpg_48075606401_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7816jpg_48075667398_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7775jpg_48075622971_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8223jpg_48075717258_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8057jpg_48075697238_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8022jpg_48075758577_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8116jpg_48075664556_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7856jpg_48075670508_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7897jpg_48075678033_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7865jpg_48075633116_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8185jpg_48075669056_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_7574jpg_48075606891_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8076jpg_48075700358_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8069jpg_48075660751_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/josef/img_8069jpg_48075660751_o.jpg"
    class="home-image"
  />,
  <img src="static/img/capture/CAPTURE_2946.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2946.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2944.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2949.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2951.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2959.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2970.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2974.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2976.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2982.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2983.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2985.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2987.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2989.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2995.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2998.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_2999.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3002.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3006.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3008.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3012.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3014-2.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3016.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3019.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3022.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3026.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3028.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3029-2.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3030.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3033.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3035.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3038.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3042.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3043.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3048.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3052.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3056.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3058.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3060-2.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3061.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3065.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3072.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3077.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3079.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3083-2.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3083.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3085.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3089.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3093.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3097.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3105.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3107.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3121.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3127.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3130.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3133.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3139-2.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3142.jpg" class="home-image" />,
  <img src="static/img/capture/CAPTURE_3143.jpg" class="home-image" />,
];

const randomize = array => {
  var image = array[Math.floor(Math.random() * array.length)];
  return image;
};

const Index = () => (
  <div class="wrapper">
    <title>Chicken & Mumbo Sauce</title>
    <Navigation />
    <div class="row">
      {/* <div class="venue-title">CRANK KARAOKE<br></br></div> */}
      <img src="static/img/crank-christmas.png" class="flyerimage" />
    </div>

    <br></br>
    {randomize(crank)}
    <br></br>
    <div class="row">
      <br></br>
      <div class="recap-box">
        <div class="shows-header">CRANK KARAOKE RECAP:</div>
        <a href="/recap">
          <button class="btn btn--right btn--tickets">BOOTH FLICKS</button>
        </a>
        <a href="/recap2">
          <button class="btn btn--right btn--tickets">RECAP PHOTOS</button>
        </a>
        <a href="https://www.instagram.com/p/B2AZMdJF1uZ/">
          <button class="btn btn--right btn--tickets">RECAP VIDEO</button>
        </a>
      </div>
      <br></br>
      <br></br>
      <div class="row">
        <div class="tickets">
          <img class="yellow-star" src="static/img/yellowstar.png" />
          THIS IS YOUR NIGHT TO BE LEAD MIC
          <img class="yellow-star" src="static/img/yellowstar.png" />
        </div>
        <br />
        <div class="about">
          {' '}
          Crank Karaoke, a one of a kind, improv jam session & open mic where
          the funky sounds of go-go collide with community. Look forward to
          experiencing impromptu karaoke moments and creative expression in a
          safe space with no judgement! Featuring a live band of former go-go
          band musicians, party where beginners and experts can share the stage
          to learn and create together and restore the culture and power of
          go-go.
          {/* <br /><br />List drops Monday 9/9! */}
        </div>
      </div>
    </div>
    <br></br>
    {/* <div class="features"> 
      <img class="home-flag" src="static/img/CRANK-KARAOKE-FLYER.png"></img>

    </div> */}
    {/* <a href="/930-recap">
      <button class="btn--tickets-center">930 RECAP PHOTOS</button>
      </a> */}
    <br></br>

    {/* <div class="row">
          <br></br>
          <div class="home-header">HERE'S WHAT HAPPENED LAST TIME</div>
            <a target="_blank" href="https://www.instagram.com/p/By-7c85hYOz/"><img class="zoom" src="static/img/crank-flick.png" /></a>
        </div>  */}
    <div class="recap-box"></div>

    <div class="row">
      <div class="tickets">LIST DROPPING SOON! GET EARLY ACCESS:</div>
      <br></br>
    </div>

    <form
      action="https://chickenandmumbosauce.us3.list-manage.com/subscribe/post?u=b930e7c77036dd2a9685eb47e&amp;id=02c06b1c6e"
      method="post"
      class="rsvp-form"
    >
      <div class="rsvp-form">
        <label for="email">Email Address: </label>
        <br></br>
        <input
          class="signup-input"
          type="email"
          name="EMAIL"
          id="email"
          required
        />
      </div>
      <button class="btn btn--right btn--tickets">STAMP</button>
    </form>
    <br></br>
    <footer>
      <Footer />
    </footer>
  </div>
);

export default Index;
