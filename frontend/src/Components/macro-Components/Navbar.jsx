import React, { useRef } from "react";
import "./macro.css";
import { useEffect } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import Sider from "./Sider";



const Navbar = ({menuButton}) => { 

  return (
    <div class="header">
          <div class="header-logo">

            
            <span class="site-title">Logo</span>
          </div>
          <div class="header-search">
            <button class="button-menu" onClick={menuButton}>
            <MenuIcon></MenuIcon>
            </button>
          </div>
        </div>
  );
};

export default Navbar;
