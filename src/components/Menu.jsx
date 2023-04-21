import React from "react";
import "./Menu.css"
import stories from "../images/book.png"
import reels from "../images/reels.png"
import rooms from "../images/rooms.png"

function Menu () {
  return (
    <div className="menu">
     <div className="stories">
         <img src={stories} alt="" />
        <h4>Stories</h4>
     </div>
     <div className="reels">
      <img src={reels} alt="" />
        <h4>Reels</h4>
     </div>
     <div className="rooms">
     <img src={rooms} alt="" />
        <h4>Rooms</h4>
     </div>

    </div>
  );
};

export default Menu;
