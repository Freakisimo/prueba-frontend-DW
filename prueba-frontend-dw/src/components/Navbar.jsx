import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import NavbarData from "./NavbarData";
import Collapse from "@mui/material/Collapse";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  function showSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <div className="navbar">
      <IconButton size="large">
        <MenuIcon onClick={showSidebar} />
      </IconButton>
      <Collapse in={sidebar} orientation="horizontal">
        <nav className="nav-menu">
          <ul>
            {NavbarData.map((data, index) => {
              return (
                <li key={index} className="nav-menu-items">
                  <a href="/">{data.icon} {data.fieldName}</a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Collapse>
    </div>
  );
}

export default Navbar;
