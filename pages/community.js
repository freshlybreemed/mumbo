import React from 'react'

import withPosts from 'nextein/posts'
import { Component } from "react";
import { Content } from 'nextein/post'
import Navigation from '../components/Navigation'
import Ticket from '../components/Ticket'
import Community from '../components/Community';


const Tickets = () => (
  <div>
    <Navigation />
    <Community />
  </div>

)

export default Tickets