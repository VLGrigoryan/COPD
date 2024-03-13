import React from "react";
import CStyle from "./Card.module.css";
import { Icon } from "../../ui";

const Card = ({ data, onClick, type }) => {
  const cardKey = `${data.number}-${data.tag}`;

  const handleClick = () => {
    onClick(data);
  };

  const cardContainerClass =
    type === "small" ? CStyle.smallCardContainer : CStyle.largeCardContainer;

  return (
    <li
      className={`${CStyle.card} ${cardContainerClass}`}
      key={cardKey}
      onClick={handleClick}
    >
     { type === "small" &&( <div className={`${CStyle.cardHeader}`}>
        <span className={`${CStyle.iconContainer}`}>
          <span className={`${CStyle.icon}`}>
            <Icon type="Ingaliator" />
          </span>
          <p className={`${CStyle.number} text text_type_main-big `}>
            {data?.number}
          </p>
        </span>
        <p className={`${CStyle.tag} text text_type_main-default`}>
          {data?.tag}
        </p>
        <h3 className={`${CStyle.title} text text_type_main-default`}>
          {data?.title}
        </h3>
      </div>)}
      <div>
        <p className={`${CStyle.description} text text_type_digits-default`}>
          {data.description}
        </p>
      </div>
      {type === "small" && data.number < 3 && (
        <span className={CStyle.connectingLine}>
          <span className={CStyle.polygon}></span>
        </span>
      )}
    </li>
  );
};

export default Card;
