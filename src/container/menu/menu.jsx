import React from "react";
import "./menu.css";

function Menu() {
  return (
    <div className="app__menu">
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
