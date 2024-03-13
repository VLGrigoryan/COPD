import React from "react";
import "./Row.css";

const Row = ({ children, onClick, type, data }) => {
  const rowKey = `${data?.number}-${data?.tag}`;

  const handleClick = () => {
    onClick(data);
  };

  const rowContainerClass = type === "large" ? "largeRow" : "row";

  return (
    <div
      key={rowKey}
      onClick={handleClick}
      className={`${rowContainerClass} row`}
    >
      {children}
    </div>
  );
};

export default Row;
