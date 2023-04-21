import { Avatar, Badge } from "@mui/material";
import React from "react";
import "./Contact.css";

function Contact({ src, username }) {
  return (
    <div className="contact">
      <Badge
        color="success"
        overlap="circular"
        badgeContent=""
        variant="dot"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      >
        <Avatar sx={{ width: 28, height: 28 }} src={src} />
      </Badge>

      <h4>{username}</h4>
    </div>
  );
}

export default Contact;
