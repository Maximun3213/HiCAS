import React from "react";
import Link from "next/link";
import classNames from "classnames/bind";

import styles from "./cardNews.module.scss";
const cx = classNames.bind(styles);

function CardNews({ link, img, title }) {
  const API_URL = process.env.API_URL;
  return (
    <div className={cx("card_item")}>
      <Link href={link}>
        <div className="">
          <div className={cx("card_img")}>
            <div
              className=""
              style={{
                backgroundImage: `url(${API_URL + img})`,
                width: "100%",
                height: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
          </div>
          <div className={cx("title")}>
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CardNews;
