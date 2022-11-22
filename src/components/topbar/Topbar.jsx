import React from 'react'
import "../topbar/Topbar.css"
import {Search, Person, Chat, Notifications} from "@material-ui/icons"
import person1 from "../../assets/person/1.jpeg"

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className='logo'>MediaChat</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search />
          <input placeholder='Search for friends' className='searchInput' />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className='topbarLink'>Homepage</span>
          <span className='topbarLink'>Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <img src={person1} alt="" className="topbarImg" />
      </div>
    </div>
  )
}

export default Topbar