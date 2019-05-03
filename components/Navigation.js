/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderWrapper } from '../static/css/navbar'

const Navigation = () => (
<div class="header">
        {/* <HeaderWrapper> */}
            <Link href="/">
                <br/>
            </Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/events">EVENTS</Link>
            <Link><img class="menu" src="static/img/ChickenMumbo_LogoWords.png" /></Link>
            <Link href="/experience">EXPERIENCE</Link>
            <Link href="/crank">CRANK KARAOKE</Link>
        {/* </HeaderWrapper> */}
    </div>
)


export default Navigation;