import React from 'react';
import "./Post.css"
import { Avatar } from '@mui/material';
import { AccountCircle, ArrowDropDownRounded, ChatBubbleOutline, ExpandMoreOutlined, NearMeRounded, ThumbUp} from '@mui/icons-material';

function Post({profilePic,image,username,timestamp,message}) {
  return (
    <div className='post'>
     <div className="post__top">
        <Avatar src={profilePic} className='post__avatar'/>
        <div className="post__topInfo">
            <h3>{username}</h3>
            <p>{timestamp}</p>
        </div>
     </div>
     <div className="post__bottom">
        <p>{message}</p>
     </div>
      <div className="post__image">
        <img src={image} alt="" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUp className='like' sx={{ fontSize: 20 }}/>
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline sx={{ fontSize: 20 }}/>
          <p>Commnet</p>
        </div>
        <div className="post__option">
          <NearMeRounded sx={{ fontSize: 20 }}/>
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircle/>
          <ArrowDropDownRounded/>
        </div>
      </div>
    </div>
  )
}

export default Post;
