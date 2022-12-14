import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MenuList } from "./MenuList";
import "./Navbar.css";
import LogoutButton from "../LogoutButton";

import CloudIcon from '@mui/icons-material/Cloud';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink exact to={url} activeClassName="active">
          {title}
        </NavLink>
      </li>
    );
  });

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <nav>
        
      <div className="logo">
        <CloudIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        Weather<font>Forecast</font>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "menu-list" : "menu-list close"}>{menuList}</ul>
         <LogoutButton isNavbar={true}/>
     
    </nav>
  );
};

export default Navbar;