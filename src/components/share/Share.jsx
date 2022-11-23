import React from 'react'
import "../share/Share.css"
import shareImg from "../../assets/person/1.jpeg"
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"

const Share = () => {
  return (
    <div className='share'>
        <div className="shreWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src={shareImg} alt="" />
                <input type="text" placeholder='Whats in your mind?' className='shareInput' />
            </div>
            <hr className='shareHr' />
            <div className="shareBottom">
                <div className='shareOptions'>
                    <PermMedia htmlColor="tomato" className="shareIcon" />
                    <div className="shareOption">
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                </div>
                <div className='shareOptions'>
                    <Room  htmlColor="blue" className="shareIcon" />
                    <div className="shareOption">
                        <span className='shareOptionText'>Locations</span>
                    </div>
                </div>
                <div className='shareOptions'>
                    <EmojiEmotions  htmlColor="green" className="shareIcon"/>
                    <div className="shareOption">
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                </div>
                <div className='shareOptions'>
                    <Label  htmlColor="goldenrod" className="shareIcon"/>
                    <div className="shareOption">
                        <span className='shareOptionText'>Tags</span>
                    </div>
                </div>
                <button className='shareBtn'>Share</button>
            </div>
        </div>
    </div>
  )
}

export default Share