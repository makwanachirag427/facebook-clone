import React from "react";
import "../components/Header.css";
import fblogo from "../images/fblogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, Badge } from "@mui/material";
import { IconButton } from "@mui/material";
import {
  AppsRounded,
  ForumRounded,
  GroupsRounded,
  HomeRounded,
  Notifications,
  OndemandVideo,
  Storefront,
  VideogameAssetOutlined,
} from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

const Header = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header__left">
        <img src={fblogo} alt="fblogo" />
        <div className="header__input">
          <SearchIcon fontSize="small" />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__option header__option--active">
          <HomeRounded />
        </div>
        <div className="header__option">
          <OndemandVideo />
        </div>
        <div className="header__option">
          <Storefront />
        </div>
        <div className="header__option">
          <GroupsRounded />
        </div>
        <div className="header__option">
          <VideogameAssetOutlined />
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <div className="header__icon">
            <IconButton>
              <AppsRounded />
            </IconButton>
          </div>
          <div className="header__icon">
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "crimson",
                },
              }}
              overlap="circular"
              badgeContent=" 2"
            >
              <IconButton>
                <ForumRounded />
              </IconButton>
            </Badge>
          </div>
          <div className="header__icon">
            <Badge
              sx={{
                "& .MuiBadge-badge": {
                  color: "white",
                  backgroundColor: "crimson",
                },
              }}
              overlap="circular"
              badgeContent="110"
             
            >
              <IconButton>
                <Notifications />
              </IconButton>
            </Badge>
          </div>

          <Avatar className="avatar" src={user.photoURL} />
        </div>
      </div>
    </div>
  );
};

export default Header;
