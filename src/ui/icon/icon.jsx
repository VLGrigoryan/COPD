import React from "react";
import BodyIcon from "./BodyIcon";
import ZigzagArrowIcon from "./ZigzagArrowIcon";
import IngaliatorIcon from "./IngaliatorIcon";
import UrneaIcon from "./UrneaIcon";
import MiocardaIcon from "./MiocardaIcon";
import HeartIcon from "./HeartIcon";

const Icon = ({ type }) => {
  switch (type) {
    case "Ingaliator":
      return <IngaliatorIcon />;
    case "Body":
      return <BodyIcon />;
    case "ZigzagArrow":
      return <ZigzagArrowIcon />;
    case "Urnea":
      return <UrneaIcon />;
    case "Miocarda":
      return <MiocardaIcon />;
    case "Heart":
      return <HeartIcon />;
    default:
      return null;
  }
};

export default Icon;
