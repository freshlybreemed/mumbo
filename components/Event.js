/**
 *
 * Header
 *
 */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { HeaderWrapper } from '../static/css/navbar'

const Event = () => (
<div >
        {/* <HeaderWrapper> */}
        <div class="row">
            <Link href="/"><img class="menu" src="static/img/ChickenMumbo_LogoWords.png" /></Link>
        </div>
        <div class="header">

            <Link href="/">
                <br/>
            </Link>
            <Link href="/about">ABOUT</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/experience">MUMBO</Link>
            <Link href="/crank">CRANK KARAOKE</Link>
        {/* </HeaderWrapper> */}
        </div>
</div>
)


export default Event;