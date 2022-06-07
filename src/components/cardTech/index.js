import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames/bind";

import styles from "./cardTech.module.scss";
import Button from "../button";
import Icon from "../../assets/images/icons/icon_tech.jpg";
const cx = classNames.bind(styles);

function CardTech() {
  const [cards, setCards] = useState([]);
  const API_URL = process.env.API_URL;

  useEffect(() => {
    fetch(`${API_URL}/card-teches`)
      .then((res) => res.json())
      .then((card) => {
        setCards(card);
      });
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("card_wapper")}>
        {cards.map((value) => (
          <div className={cx("card")} key={value.id}>
            <div className={cx("card_title")}>
              <Image
                src={API_URL + value.icon.url}
                width={40}
                height={40}
                alt="icon"
              />
              <h3>{value.title}</h3>
            </div>
            <ul className={cx("card_content")}>
              {value.info_card_teches.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className={cx("card_btn")}>
        <Button width="170px" borderRadius="18px" mainBtn="true" link="">
          Xem thêm
        </Button>
      </div>
    </div>
  );
}

export default CardTech;
