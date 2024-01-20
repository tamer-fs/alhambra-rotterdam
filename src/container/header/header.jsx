import React from "react";
import "./header.css";
import welcome from "../../assets/main-food-img.jpg";
import main from "../../assets/main.png";

function Header() {
  return (
    <div className="app__header">
      <div className="app__header-info">
        <p className="app__header-info-p">Chase the new flavour</p>
        <h1 className="app__header-info-h1">De sleutel tot heerlijk eten</h1>
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
