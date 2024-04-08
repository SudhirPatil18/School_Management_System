import React, { useRef } from "react";
import "./macro.css";
import { useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Sider from "./Sider";
import Navbar from "./Navbar";

let responsiveBreakpoint = 991;

const PageBody = ({Comp}) => {
  const ref_Container = useRef(null);

  function menuButton() {
    ref_Container.current.classList.toggle("nav-closed");
  }

  function pageContent() {
    if (window.innerWidth <= responsiveBreakpoint) {
      ref_Container.current.classList.add("nav-closed");
    }
  }

  useEffect(() => {
    if (window.innerWidth > responsiveBreakpoint) {
      ref_Container.current.classList.remove("nav-closed");
    }
    if (window.innerWidth <= responsiveBreakpoint) {
      ref_Container.current.classList.add("nav-closed");
    }
  }, [window.innerWidth]);

  return (
    <div>
      <div class="container" ref={ref_Container}>
        {/* navbar */}
        <Navbar menuButton={menuButton}></Navbar>

        {/* sider */}
        <Sider pageContent={pageContent} Comp={Comp}></Sider>
      </div>
    </div>
  );
};

export default PageBody;
