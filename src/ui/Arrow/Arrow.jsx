import React from "react";
import "./Arrow.css";

const Arrow = ({ children, className }) => {
  return <span className={`${className} arrow`}>{children}</span>;
};

export default Arrow;
