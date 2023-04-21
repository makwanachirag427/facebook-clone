import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";
import {
  Campaign,
  EventAvailableRounded,
  ExpandMoreOutlined,
  FlagRounded,
  GroupSharp,
  Groups,
  History,
  OndemandVideo,
  StarRounded,
  Storefront,
  TurnedIn,
} from "@mui/icons-material";
import { useStateValue } from "./StateProvider";

const Sidebar = () => {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <div className="sidebar__content">
        <SidebarRow src={user.photoURL} title={user.displayName} />
        <SidebarRow Icon={GroupSharp} title="Friends" />
        <SidebarRow Icon={Storefront} title="Marketplace" />
        <SidebarRow Icon={History} title="Most recent " />
        <SidebarRow Icon={Groups} title="Groups " />
        <SidebarRow Icon={OndemandVideo} title="Watch " />
        <SidebarRow Icon={TurnedIn} title="Saved " />
        <SidebarRow Icon={FlagRounded} title="Pages" />
        <SidebarRow Icon={EventAvailableRounded} title="Events" />
        <SidebarRow Icon={Campaign} title="Ads manager" />
        <SidebarRow Icon={StarRounded} title="Favourites" />
        <SidebarRow Icon={ExpandMoreOutlined} title="See more " />
      </div>
    </div>
  );
};

export default Sidebar;
