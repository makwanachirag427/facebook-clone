import React from "react";
import "./Story.css";
import { Avatar } from "@mui/material";

const Story = ({ image, profileUrl, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} 
    className="story">
      <Avatar className="story__avatar" src={profileUrl} />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
