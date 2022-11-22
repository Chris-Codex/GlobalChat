import React from 'react'
import "../leftbar/LeftBar.css"
import {RssFeed, HelpOutline, PlayCircleFilledOutlined, Bookmark, WorkOutline, Event, School} from "@material-ui/icons"
import pics2 from "../../assets/person/2.jpeg"

const LeftBar = () => {
  return (
    <div className='leftbar'>
      <div className="leftbarWrapper">
        <ul className='leftbarList'>
          <li className='letfbarListItem'>
            <RssFeed className='leftbarIcon'/>
            <span className='letfbarListItemText'>Feed</span>
          </li>
          <li className='letfbarListItem'>
            <PlayCircleFilledOutlined className='leftbarIcon'/>
            <span className='letfbarListItemText'>Video</span>
          </li>
          <li className='letfbarListItem'>
            <Bookmark className='leftbarIcon'/>
            <span className='letfbarListItemText'>Bookmark</span>
          </li>
          <li className='letfbarListItem'>
            <HelpOutline className='leftbarIcon'/>
            <span className='letfbarListItemText'>Questions</span>
          </li>
          <li className='letfbarListItem'>
            <WorkOutline className='leftbarIcon'/>
            <span className='letfbarListItemText'>Jobs</span>
          </li>
          <li className='letfbarListItem'>
            <Event className='leftbarIcon'/>
            <span className='letfbarListItemText'>Event</span>
          </li>
          <li className='letfbarListItem'>
            <School className='leftbarIcon'/>
            <span className='letfbarListItemText'>Courses</span>
          </li>
        </ul>

        <button className='leftbarBtn'>Show More</button>
        <hr className='hrLine'/>

        <ul className='leftbarFriendList'>
          <li className='leftbarFriends'>
            <img src={pics2} alt="" className="leftbarFriendImg" />
            <span className='leftbarFriendName'>Chris Iheacho</span>
          </li>
          <li className='leftbarFriends'>
            <img src={pics2} alt="" className="leftbarFriendImg" />
            <span className='leftbarFriendName'>Chris Iheacho</span>
          </li>
          <li className='leftbarFriends'>
            <img src={pics2} alt="" className="leftbarFriendImg" />
            <span className='leftbarFriendName'>Chris Iheacho</span>
          </li>
          <li className='leftbarFriends'>
            <img src={pics2} alt="" className="leftbarFriendImg" />
            <span className='leftbarFriendName'>Chris Iheacho</span>
          </li>
          <li className='leftbarFriends'>
            <img src={pics2} alt="" className="leftbarFriendImg" />
            <span className='leftbarFriendName'>Chris Iheacho</span>
          </li>
          <li className='leftbarFriends'>
            <img src={pics2} alt="" className="leftbarFriendImg" />
            <span className='leftbarFriendName'>Chris Iheacho</span>
          </li>
          <li className='leftbarFriends'>
            <img src={pics2} alt="" className="leftbarFriendImg" />
            <span className='leftbarFriendName'>Chris Iheacho</span>
          </li>
          <li className='leftbarFriends'>
            <img src={pics2} alt="" className="leftbarFriendImg" />
            <span className='leftbarFriendName'>Chris Iheacho</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default LeftBar