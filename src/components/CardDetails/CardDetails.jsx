import React from "react";
import PropTypes from "prop-types";
import IDStyle from "./CardDetails.module.css";
import StatisticsBackground from "../../ui/Background/Background";
import { Icon } from "../../ui";

const CardDetails = ({ data }) => {
  return data.map((item, index) => (
    <div key={index} className={IDStyle.container}>
      {item.text && <div className={IDStyle.description}>{item.text}</div>}
      {item.title && (
        <h2 className={`${IDStyle.title} text text_type_digits-large`}>
          {item.title}
        </h2>
      )}
      <div className={IDStyle.imageContainer}>
        {item.image && item.image !== undefined && <StatisticsBackground />}
      </div>
      {item.cards && (
        <ul className={IDStyle.cardList}>
          {item.cards.map((card, index) => (
            <li className={IDStyle.card} key={index}>
              <span className={IDStyle.cardIcon}>
                <Icon type={card.icon} />
              </span>
              <h3 className={`text text_type_main-big ${IDStyle.cardTitle}`}>
                {card.title}
              </h3>
              {card.tag}
              {card.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  ));
};

CardDetails.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      title: PropTypes.string,
      image: PropTypes.string,
      cards: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string,
          title: PropTypes.string,
          tag: PropTypes.string,
          text: PropTypes.string,
        })
      ),
    })
  ).isRequired,
};

export default CardDetails;
