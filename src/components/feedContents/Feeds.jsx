import React from 'react'
import "../feedContents/Feeds.css"
import Share from '../share/Share'

const Feeds = () => {
  return (
    <div className='feeds'>
      <div className="feedWrapper">
        <Share />
      </div>
    </div>
  )
}

export default Feeds