import React from "react";
import "./Header.css";
import logo from "./images/magnifying-glasses-png-247.png";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import AddIcon from "@material-ui/icons/Add";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import { Avatar, IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useStateValue } from "./StateProvider";
import { Link } from "react-router-dom";

function Header(props) {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="" className="src" />
        <div className="header_input">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search on Go-Findme"
            className="text"
          />
        </div>
      </div>
      <div id="A" className="header_center">
        <div className={`header_option header_option-${props.cName}`}>
          <Link style={{ color: "grey" }} to="/">
            <HomeIcon fontSize="large" />
          </Link>
        </div>
        <div className="header_option">
          <Link style={{ color: "grey" }} to="/location">
            <LocationOnIcon fontSize="large" />
          </Link>
        </div>
        <div className="header_option">
          <Link style={{ color: "grey" }} to="/addpost">
            <AddIcon fontSize="large" />
          </Link>
        </div>
        <div className="header_option">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>
      <div className="header_right">
        <div>
          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Header;
