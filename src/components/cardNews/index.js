import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import classNames from "classnames/bind";

import styles from "./cardNews.module.scss";
import Button from "../button";
const cx = classNames.bind(styles);

function CardNews() {
  const [cards, setCards] = useState([]);
  const API_URL = process.env.API_URL;
  useEffect(() => {
    fetch(`${API_URL}/news-cards`)
      .then((res) => res.json())
      .then((card) => {
        setCards(card);
      });
  }, []);
  return (
    <div className={cx("container")}>
      <div className={cx("card_wapper")}>
        {cards &&
          cards.map((value) => (
            <div className={cx("card_item")} key={value.id}>
              <Link href={value.link}>
                <div className="">
                  <div className={cx("card_img")}>
                    <div
                      className=""
                      style={{
                        backgroundImage: `url(${API_URL + value.image[0].url})`,
                        width: "100%",
                        height: "100%",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                  <div className={cx("title")}>
                    <p>{value.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
      <div className={cx("card_btn")}>
        <Button width="170px" href="" borderRadius="18px" mainBtn="true">
          Xem thêm
        </Button>
      </div>
    </div>
  );
}

export default CardNews;
