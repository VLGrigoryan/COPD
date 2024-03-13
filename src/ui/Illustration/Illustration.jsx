import React from "react";
import "./Illustration.css";

const Illustration = ({ size, style, isActive, fillInactive }) => {

  

  return (
    <div className="illustrationContent">
      <span style={{ zIndex: 3 }} className="coloring lightBlue"></span>
      <span style={{ zIndex: 2 }} className="coloring green"></span>
      <span style={{ zIndex: 1 }} className="coloring orange"></span>
    </div>
  );
};

export default Illustration;
