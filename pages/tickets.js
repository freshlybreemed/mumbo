import React from 'react'

import withPosts from 'nextein/posts'
import { Component } from "react";
import { Content } from 'nextein/post'
import Navigation from '../components/Navigation'
import Ticket from '../components/Ticket'


const Tickets = () => (
  <div>
    <Navigation />
    <Ticket />
  </div>

)

export default Tickets