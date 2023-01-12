import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/ManageSearchRounded";
import BackpackRoundedIcon from "@mui/icons-material/BackpackRounded";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="4395x8f02-300x300.png" />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Avatar
          alt="Avatar"
          src="https://sun9-53.userapi.com/impg/nFKQdnoujoqHhfBP2Nj3sMNXbIjXDVqu7yQlkg/gowfPz-zuPs.jpg?size=554x512&quality=95&sign=7c5e5ae2949fbd2757916c5274e4d641&type=album"
          sx={{ width: 40, height: 40 }}
        />
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest!</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <Link to="checkout">
          <div className="header_optionCar">
            <BackpackRoundedIcon />
            <span
              className="header_optionLineTwo
          header_carCount"
            >
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default Header;
