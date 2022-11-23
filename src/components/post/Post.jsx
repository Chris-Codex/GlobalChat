import React from 'react'
import "../post/Post.css"
import {MoreVert} from "@material-ui/icons"
import img from "../../assets/post/1.jpeg"
import like from "../../assets/like.png"
import heart from "../../assets/heart.png"

const Post = () => {
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className='postTop'>
                <div className="postTopLeft">
                    <img src={img} alt="" className='postProfileImg' />
                    <span className="postUsername">Chris Iheacho</span>
                    <span className="postDate">5 mins ago</span>
                </div>
                <div className="postTopRight">
                    <MoreVert />
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">Hey:)</span>
                <img className='postImg' src={img} alt="" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src={like} alt="" className="likeIcon" />
                    <img src={heart} alt="" className="likeIcon" />
                    <span className="postLikeCounter">32 People liked it</span>
                </div>
                <div className="psotBottomRight">
                    <span className="postCommentText">9 Comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Post