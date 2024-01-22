import React from "react";
import "./title.css";
import Seperator from "./seperator";

function Title(props) {
  return (
    <div className="title">
      <h2>{props.title}</h2>
      <Seperator
        width={"100px"}
        height={2}
        color={"#d3a26b"}
        margin={"7px 0px 14px 0px"}
      />
      <p>{props.subTitle}</p>
    </div>
  );
}

export default Title;
