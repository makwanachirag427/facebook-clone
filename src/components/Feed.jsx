import React, { useState } from "react";
import "./Feed.css";
import StoryReel from "./StoryReel";
import Menu from "./Menu";
import MessageSender from "./MessageSender";
import Post from "./Post";


const Feed = () => {

  return (
    <div className="feed">
      <Menu />
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://bit.ly/418IjS9"
        image="https://cdn.pixabay.com/photo/2020/10/17/17/41/girl-5662873_960_720.jpg"
        username="Chirag Makwana"
        timestamp="1h"
        message="wow this is my first post on facebook"
      />
      <Post
        profilePic="https://bit.ly/418IjS9"
        image="https://cdn.pixabay.com/photo/2016/03/29/03/14/portrait-1287421_960_720.jpg"
        username="Chirag Makwana"
        timestamp="3d"
        message="Welcome to the world of Happy Hacking 🖤🤎🖤 "
      />
      <Post
        profilePic="https://bit.ly/418IjS9"
        image="https://cdn.pixabay.com/photo/2018/08/22/06/47/code-3622942_960_720.jpg"
        username="Chirag Makwana"
        timestamp="3d"
        message="Talk is cheap.Show me the code. - Linus Torvalds"
      />
      <Post
        profilePic="https://bit.ly/418IjS9"
        username="Chirag Makwana"
        timestamp="5d"
        message="HaPpY  MoRnInG WoRlD 😍 "
      />
    </div>
  );
};

export default Feed;
