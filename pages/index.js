import React from 'react';
import { Component } from 'react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

let crank = [
  <img
    src="static/img/uhall/josef/img_0857jpg_49284878517_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1255jpg_49284924917_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1194jpg_49284919027_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1459jpg_49284263118_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1220jpg_49284238598_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1462jpg_49284264043_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1164jpg_49284708401_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0860jpg_49284879212_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0958jpg_49284208843_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0998jpg_49284897732_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1423jpg_49284257703_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1463jpg_49284948617_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1277jpg_49284928222_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1386jpg_49284255428_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1456jpg_49284739456_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0885jpg_49284883347_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0977jpg_49284688771_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1413jpg_49284256503_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1138jpg_49284913347_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0988jpg_49284213543_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1104jpg_49284700661_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1074jpg_49284903762_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1071jpg_49284694841_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1178jpg_49284709941_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1449jpg_49284738076_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0870jpg_49284199468_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1432jpg_49284258808_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1399jpg_49284732756_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1441jpg_49284943647_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1040jpg_49284218003_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0901jpg_49284675946_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0952jpg_49284208168_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1133jpg_49284229468_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1434jpg_49284735896_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1442jpg_49284260383_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1261jpg_49284718716_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1452jpg_49284945982_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1149jpg_49284707236_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1111jpg_49284909077_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1124jpg_49284910422_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1102jpg_49284906882_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1263jpg_49284719066_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0921jpg_49284203573_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1418jpg_49284733836_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1371jpg_49284937897_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1186jpg_49284711451_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1182jpg_49284710986_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0865jpg_49284674231_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1072jpg_49284696096_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0971jpg_49284894337_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1492jpg_49284952487_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1446jpg_49284944877_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1205jpg_49284713176_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1383jpg_49284731511_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1428jpg_49284735006_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1014jpg_49284216073_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1166jpg_49284915702_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1209jpg_49284920752_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1608jpg_49284753901_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1001jpg_49284897987_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0927jpg_49284204673_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1144jpg_49284913777_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1275jpg_49284720151_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1214jpg_49284921372_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0917jpg_49284885812_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1097jpg_49284906612_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1031jpg_49284899522_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1254jpg_49284241138_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1041jpg_49284218213_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1227jpg_49284239773_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1278jpg_49284928977_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1481jpg_49284742961_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1129jpg_49284703731_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1131jpg_49284229138_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1488jpg_49284744196_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0932jpg_49284680506_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1109jpg_49284700916_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1480jpg_49284742226_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1054jpg_49284219043_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1085jpg_49284905172_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1088jpg_49284905562_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1252jpg_49284923217_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1173jpg_49284916647_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1472jpg_49284741926_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1115jpg_49284702266_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1158jpg_49284707576_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1200jpg_49284236858_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_0966jpg_49284210733_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/josef/img_1487jpg_49284951142_o.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-10.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-11.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-12.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-13.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-14.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-15.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-16.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-17.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-18.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-19.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-2.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-20.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-21.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-22.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-23.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-24.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-25.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-26.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-27.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-28.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-29.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-3.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-30.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-4.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-5.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-6.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-7.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-8.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26-9.jpg"
    class="home-image"
  />,
  <img
    src="static/img/uhall/cap/Chicken_&_Mumbo_12-26.jpg"
    class="home-image"
  />,
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
      <div class="home-image-box">
        <div class="shows-header">CRANK KARAOKE RECAP:</div>
        <a href="/home-image">
          <button class="btn btn--right btn--tickets">BOOTH FLICKS</button>
        </a>
        <a href="/home-image2">
          <button class="btn btn--right btn--tickets">RECAP PHOTOS</button>
        </a>
        {/* <a href="https://www.instagram.com/p/B2AZMdJF1uZ/">
          <button class="btn btn--right btn--tickets">home-image VIDEO</button>
        </a> */}
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
      </div>
    </div>
    <br></br>
    {/* <div class="features"> 
      <img class="home-flag" src="static/img/CRANK-KARAOKE-FLYER.png"></img>

    </div> */}
    {/* <a href="/930-home-image">
      <button class="btn--tickets-center">930 home-image PHOTOS</button>
      </a> */}
    <br></br>

    {/* <div class="row">
          <br></br>
          <div class="home-header">HERE'S WHAT HAPPENED LAST TIME</div>
            <a target="_blank" href="https://www.instagram.com/p/By-7c85hYOz/"><img class="zoom" src="static/img/crank-flick.png" /></a>
        </div>  */}
    <div class="home-image-box"></div>

    <div class="row">
      <div class="tickets">FIND OUT ABOUT THE NEXT ONE:</div>
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
