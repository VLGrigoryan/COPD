import React, { useState, useContext } from "react";
import BIStyle from "./Page.module.css";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import CardDetails from "../CardDetails/CardDetails";
import { PageContext } from "../contexts/PageContext";
import { useModal } from "../../hooks/useModal";
import { Icon, Arrow, Row } from "../../ui";
import { data, modalData } from "../../utils/data";

function Page() {
  const [details, setDetails] = useState(null);
  const { isModalOpen, openModal, closeModal } = useModal();
  const { data: pageData } = useContext(PageContext);

  const handleCardClick = (item) => {
    setDetails(item);
    openModal();
  };
  const cards = modalData.section2;

  return (
    <section className={BIStyle.section}>
      <div className={`${BIStyle.container}`}>
        <h2 className={`${BIStyle.title} text text_type_main-large pl-4 pr-4`}>
          ХОБЛ: мифы и реальность
        </h2>
        <Row onClick={() => handleCardClick(modalData.section1)}>
          <span className={`${BIStyle.icon}`}>
            <Icon type="Body" />
          </span>
          <Arrow>
            <p className={`text text_type_main-small`}>
              ХОБЛ болеют
              <br />
              <span className="text text_type_main-default-bold ">
                преимущественно мужчины?
              </span>
            </p>
          </Arrow>

          <p
            className={`${BIStyle.rowCardTextContainer} text text_type_main-small ml-11`}
          >
            В десятилетнем исследовании «Генетическая эпидемиология ХОБЛ»
            (COPDGene) среди пациентов с ХОБЛ, диагностированной до 55 лет, было
            выявлено преобладание женщин (66%), а в возрасте 60-64 лет
            количество женщин и мужчин. Такое эпидемиологическое распределение
            заболеваемости ХОБЛ может быть связано с тем, что дыхательные пути
            курящих женщин имеют более высокий процент площади стенок, но
            меньшую площадь просвета, внутренний диаметр и толщину дыхательных
            путей по сравнению с курящими мужчинами.
          </p>
        </Row>
        <Row type="large" onClick={() => handleCardClick(modalData.section2)}>
          <span className={`${BIStyle.icon}`}>
            <Icon type="ZigzagArrow" />
          </span>
          <Arrow>
            <p className={`text text_type_main-small`}>
              <span className="text text_type_main-default-bold ">Опасно </span>
              не наличие заболевания, а обострения?
            </p>
          </Arrow>

          <p
            className={`${BIStyle.rowCardTextContainer} text text_type_main-small`}
          >
            Большинство пациентов с ХОБЛ столкнется с обострениями: как минимум
            одно среднетяжелое или тяжелое обострение случится в течение 3 лет у
            77% пациентов1. В течение 5 лет после первого тяжёлого обострения в
            живых остаются только 40% пациентов.2 Прогноз после обострений ХОБЛ
            схож с таковым при сердечной недостаточности, инфаркте миокарда и
            некоторых злокачественных опухолях.
          </p>
        </Row>

        <div className={`${BIStyle.container}`}>
          <h2
            className={`${BIStyle.title} text text_type_main-large pl-4 pr-4`}
          >
            Терапия ХОБЛ: что в фокусе?
          </h2>
          <h3
            className={`${BIStyle.subTitle} text text_type_main-default-bold`}
          >
            Даже 1 среднетяжелое обострение — сигнал к увеличению объема терапии
          </h3>
          <p
            className={`${BIStyle.heading} text_type_main-default-bold mt-10 mb-10`}
          >
            Приоритетные направления фармакотерапевтической стратегии при
            ХОБЛ&#185;:
          </p>
          <ul className={`${BIStyle.cardList} pl-4 pr-4`}>
            {data.card.map((cardData) => (
              <Card
                key={cardData.number}
                data={cardData}
                onClick={(clickedData) => console.log(clickedData)}
                type={cardData.number < 4 ? "small" : "large"}
              />
            ))}
          </ul>
        </div>
      </div>

      <div className={`${BIStyle.container} pl-4 pr-4`}></div>
      {isModalOpen && (
        <Modal onClose={closeModal} title="Детали ингредиента">
          <CardDetails data={details} cards={cards} />
        </Modal>
      )}
    </section>
  );
}

export default Page;
