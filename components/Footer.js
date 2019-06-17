/**
 *
 * Header
 *
 */

import React, {Component} from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderWrapper } from '../static/css/navbar'
import ReactGA from 'react-ga';

if (!typeof window == 'undefined'){
  // console.log(ReactGA)
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const Footer = () => (
    <div class="footer">
            <br></br>
            © 2019 CHICKEN & MUMBO SAUCE. All Rights Reserved.
            <br></br>
            <br></br>
            DESIGN + CODE: @FRESHLYBREEMED
    </div>
)


export default Footer;