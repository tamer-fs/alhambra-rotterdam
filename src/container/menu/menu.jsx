import React from "react";
import "./menu.css";
import Seperator from "../../components/seperator";

function Menu() {
  return (
    <div className="app__menu">
      <div className="app__menu-title">
        <h2>Ons Menu</h2>
        <Seperator
          width={"100px"}
          height={2}
          color={"#d3a26b"}
          margin={"7px 0px 14px 0px"}
        />
        <p>Onze uitgebreide en heerlijke smaakvolle gerechten</p>
      </div>
      <div className="app__menu-categories">
        <div className="app__menu-categories-item" id="breakfast">
          <a href="#">Ontbijt</a>
        </div>
        <div className="app__menu-categories-item" id="lunch">
          <a href="#">Lunch</a>
        </div>
        <div className="app__menu-categories-item" id="main-dish">
          <a href="#">Hoofdgerechten</a>
        </div>
        <div className="app__menu-categories-item" id="specials">
          <a href="#">Alhambra specials</a>
        </div>
        <div className="app__menu-categories-item" id="dessert">
          <a href="#">Desserts</a>
        </div>
        <div className="app__menu-categories-item" id="drinks">
          <a href="#">Drinks</a>
        </div>
        <div className="app__menu-categories-item" id="mock">
          <a href="#">Mocktails</a>
        </div>
      </div>
    </div>
  );
}

export default Menu;
