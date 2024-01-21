import React, { useState } from "react";
import "./header.css";
import welcome from "../../assets/main-food-img.jpg";
import main from "../../assets/main.png";

function Header() {
  const [opacity, setOpacity] = useState(0.3);
  return (
    <div
      className="app__header"
      id="home"
      style={{ opacity: opacity }}
      onLoad={() => setOpacity(1)}
    >
      <div className="app__header-info">
        <p className="app__header-info-p">Dit is een neppe korte quote</p>
        <h1 className="app__header-info-h1">
          Vul hier een korte krachtige tekst in
        </h1>
        <div></div>
        <button className="app__header-info-button">Ontdek ons menu</button>
      </div>
      <div className="app__wrapper-img">
        <img src={main} alt="main-img" />
      </div>
    </div>
  );
}

export default Header;
