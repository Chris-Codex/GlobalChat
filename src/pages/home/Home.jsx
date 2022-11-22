import React from 'react'
import "../home/Home.css"
import LeftBar from '../../components/leftbar/LeftBar'
import Topbar from '../../components/topbar/Topbar'
import Feeds from './../../components/feedContents/Feeds';
import RightBar from './../../components/rightbar/RightBar';

const Home = () => {
  return (
    <>
        <Topbar />
        <div className='homeContainer'>
          <LeftBar />
          <Feeds /> 
          <RightBar />
        </div>
    </>
  )
}

export default Home