import React, { useState } from "react";
import "./navbar.css";

import logo from "../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBurger, faHippo } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="main-logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">Over Ons</a>
        </li>
        <li className="p__opensans">
          <a href="#">Menu</a>
        </li>
        <li className="p__opensans">
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-smallscreen">
        <FontAwesomeIcon
          icon={faBars}
          fontSize={27}
          onClick={() => {
            setToggleMenu(true);
          }}
        />

        {toggleMenu && (
          <div
            className="app__navbar-smallscreen_overlay"
            onClick={() => {
              setToggleMenu(false);
            }}
          >
            <ul className="app__navbar-smallscreen-links">
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Over Ons</a>
              </li>
              <li className="p__opensans">
                <a href="#">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
