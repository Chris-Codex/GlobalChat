import React from 'react'
import "../feedContents/Feeds.css"
import Share from '../share/Share'
import Post from './../post/Post';

const Feeds = () => {
  return (
    <div className='feeds'>
      <div className="feedWrapper">
        <Share />
        <Post />
      </div>
    </div>
  )
}

export default Feeds