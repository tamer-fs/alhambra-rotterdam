import React, { useState } from "react";
import "./navbar.css";

import logo from "../assets/logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBurger,
  faHippo,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [menuPos, setMenuPos] = useState("-50vh");

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
          <a href="#menu">Menu</a>
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
            setMenuPos("0px");
          }}
        />

        {toggleMenu && (
          <div
            className="app__navbar-smallscreen_overlay"
            style={{ top: menuPos }}
          >
            <ul
              className="app__navbar-smallscreen-links"
              onClick={() => {
                setToggleMenu(false);
                setMenuPos("-50vh");
              }}
            >
              <li className="p__opensans">
                <a href="#home">Home</a>
              </li>
              <li className="p__opensans">
                <a href="#about">Over Ons</a>
              </li>
              <li className="p__opensans">
                <a href="#menu">Menu</a>
              </li>
              <li className="p__opensans">
                <a href="#">Contact</a>
              </li>
            </ul>
            <FontAwesomeIcon
              icon={faUtensils}
              fontSize={27}
              onClick={() => {
                setToggleMenu(false);
                setMenuPos("-50vh");
              }}
              color={"#d3a26b"}
              className="app__navbar-smallscreen-close"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
