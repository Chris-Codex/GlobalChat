import React from 'react'
import "../share/Share.css"
import shareImg from "../../assets/person/1.jpeg"

const Share = () => {
  return (
    <div className='share'>
        <div className="shreWrapper">
            <div className="shareTop">
                <img className='shareProfileImg' src={shareImg} alt="" />
            </div>
            <div className="shareBottom"></div>
        </div>
    </div>
  )
}

export default Share