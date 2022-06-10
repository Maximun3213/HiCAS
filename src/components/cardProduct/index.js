import React from "react";
import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./cardProduct.module.scss";
import Button from "../button";

const cx = classNames.bind(styles);

function CardProduct({ Img, Icon, titleBtn, title, decs }) {
  const API_URL = process.env.API_URL;

  return (
    <div className={cx("card")}>
      <div
        className={cx("card_image")}
        style={{
          backgroundImage: `url(${API_URL + Img})`,
          width: "100%",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={cx("card_content")}>
        <Image src={API_URL + Icon} alt="icon" width={40} height={40} />
        <b className={cx("card_title")}>{title}</b>
        <p className={cx("card_decs")}>{decs}</p>
        <div className={cx("card_btn")}>
          <Button
            link="https://hicas.vn/"
            backgroundColor="transparent"
            width="100%"
            height="35px"
            border="1px solid #C4C4C4"
            borderRadius="20px"
            margin="4% auto"
          >
            {titleBtn}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
