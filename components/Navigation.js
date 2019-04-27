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
                {/* <a href="/"><img src="/static/img/cash.png" alt="Hoist x OATW Bottle" title="Hoist x OATW Bottle" class="header" /></a> */}
            </Link>
            <Link href="/">Home</Link>

            <Link href="/about">About</Link>
            <Link href="/events">Events</Link>
        {/* </HeaderWrapper> */}
    </div>
)


export default Navigation;