import React from "react";

function Seperator(props) {
  return (
    <div
      style={{
        width: props.width,
        height: props.height,
        backgroundColor: props.color,
        margin: props.margin,
      }}
    ></div>
  );
}

export default Seperator;
