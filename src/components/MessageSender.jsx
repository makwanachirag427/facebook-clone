import React from "react";
import "./MessageSender.css";
import { Avatar } from "@mui/material";
import { useState } from "react";
import {
  InsertEmoticonOutlined,
  PhotoLibrary,
  PhotoLibraryOutlined,
  Videocam,
} from "@mui/icons-material";
import { useStateValue } from "./StateProvider";



function MessageSender() {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput("");
  };
  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messageSender__input"
            type="text"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <button onClick={handleSubmit} type="submit">
            hidden submit
          </button>
        </form>
      </div>
      <div className="messageSender__bottom">
        <div className="messageSender__option">
          <Videocam sx={{ fontSize: 28 }} style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="messageSender__option">
          <PhotoLibrary className="gallaryimg" sx={{ fontSize: 28 }} />
          <h3>Photo/video</h3>
        </div>
        <div className="messageSender__option">
          <InsertEmoticonOutlined
            sx={{ fontSize: 28 }}
            style={{ color: "orange" }}
          />
          <h3>Feeling/activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
