import React from "react";
import "./about.css";
import Seperator from "../../components/seperator";

function About() {
  return (
    <div className="app__about" id="about">
      <div className="app__about-container">
        <h2 className="app__about-h2">Over ons</h2>
        <Seperator
          width={"100px"}
          height={2}
          color={"#d3a26b"}
          margin={"7px 0px 14px 0px"}
        />
        <p className="app__about-p">
          Dit is een faketekst. Alles wat hier staat is slechts om een indruk te
          geven van het grafische effect van tekst op deze plek. Wat u hier
          leest is een voorbeeldtekst. Deze wordt later vervangen door de
          uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus
          een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen
          deze toch vaak lezen. Zelfs als men weet dat het om een faketekst
          gaat, lezen ze toch door.
        </p>
      </div>
      <div className="app__about-container">
        <h2 className="app__about-h2">Onze Geschiedenis</h2>
        <Seperator
          width={"100px"}
          height={2}
          color={"#d3a26b"}
          margin={"7px 0px 14px 0px"}
        />
        <p className="app__about-p">
          Dit is een faketekst. Alles wat hier staat is slechts om een indruk te
          geven van het grafische effect van tekst op deze plek. Wat u hier
          leest is een voorbeeldtekst. Deze wordt later vervangen door de
          uiteindelijke tekst, die nu nog niet bekend is. De faketekst is dus
          een tekst die eigenlijk nergens over gaat. Het grappige is, dat mensen
          deze toch vaak lezen. Zelfs als men weet dat het om een faketekst
          gaat, lezen ze toch door.
        </p>
      </div>
    </div>
  );
}

export default About;
