import React from 'react'

import withPosts from 'nextein/posts'
import { Content } from 'nextein/post'
import Navigation from '../components/Navigation'

export default withPosts(({ post }) => {
    return (
        <div class="grid">
            <Navigation />
        </div>
    )
})