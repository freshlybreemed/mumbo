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
        <section class="ticketing">
          <div class="ticketing-row">
          < br></br>
            <div class="ticketing-bold">EARLY BIRD</div>
            <div class="ticketing-bold">$15 + 2.15 FEE
            </div>
            {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
            <div class="ticketing-regular">SALE ENDS JUNE 1
            </div>
            
            {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
         </div>
         <div class="ticketing-row">
          < br></br>
            <div class="ticketing-bold">GENERAL ADMISSION (TIER 1)</div>
            <div class="ticketing-bold">$20 + 2.75 FEE   
            </div>
            {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
            <div class="ticketing-regular">SALE ENDS JUNE 6
            </div>
            
            {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
         </div> 
         <div class="ticketing-row">
          < br></br>
            <div class="ticketing-bold">GENERAL ADMISSION (TIER 2)</div>
            <div class="ticketing-bold">$25 + 3.12 FEE
            </div>
            {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
            <div class="ticketing-regular">SALE ENDS JUNE 14
            </div>
            
            {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
         </div> 
         <div class="ticketing-row">
          < br></br>
            <div class="ticketing-bold">BOTTLE SERVICE</div>
            {/* <div class="ticketing-bold">PER REQUEST</div> */}
            {/* <div class="ticketing-bold">WASHINGTON, DC</div> */}
            <div class="ticketing-regular">For all bottle and table requests please contact stamp@chickenandmumbosauce.com</div>
            
            {/* <div class="ticketing-regular">SALE ENDS JUNE 1</div><br></br> */}
         </div>
        </section>
</div>
)


export default Event;