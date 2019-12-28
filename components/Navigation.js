/**
 *
 * Header
 *
 */

import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderWrapper } from '../static/css/navbar';
import ReactGA from 'react-ga';

if (!typeof window == 'undefined') {
  // console.log(ReactGA)
  ReactGA.pageview(window.location.pathname + window.location.search);
}

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.init = this.init.bind(this);
    this.logPageView = this.logPageView.bind(this);
  }
  componentDidMount() {
    this.init();
    this.logPageView();
  }
  init() {
    console.log('ga init');
    ReactGA.initialize('UA-140796939-1');
  }
  logPageView() {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }
  render() {
    return (
      <div>
        {/* <div class="logo-header" >
                    <Link href="/"><img class="menu" src="static/img/ChickenMumbo_LogoWords.png" /></Link>
                </div>  */}
        <div class="header">
          <Link href="/">
            <img
              class="menu-logo"
              src="static/img/ChickenMumbo_LogoWords.png"
            />
          </Link>
          {/* <div class="menu-item">
                    <Link href="/">HOME</Link>
                    </div> */}
          {/* <div class="menu-item">
            <Link href="/crank">CRANK CONTENT</Link>
          </div> */}
          {/* <div class="menu-item1">
            <Link href="/events">EVENTS</Link>
          </div> */}

          {/* <Link href="/crank">CRANK KARAOKE</Link> */}
        </div>
      </div>
    );
  }
  xz;
}

export default Navigation;
