import React, { useEffect } from "react";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Image from "next/image";
import thumb from "../../assets/images/thumb.jpg";
import classNames from "classnames/bind";
import styles from "./cardService.module.scss";
import Button from "../button";
import dynamic from "next/dynamic";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
const cx = classNames.bind(styles);

const Responsive = {
  200: {
    items: 1,
    margin: 10,
  },
  600: {
    items: 2,
    margin: 10,
  },
  1024: {
    items: 3,
    margin: 10,
  },
};

function CardService() {
  return (
    <div className={cx("container")}>
      <OwlCarousel
        className={cx("owl-theme", "owl-carousel")}
        loop
        margin={29}
        // autoplay
        responsive={Responsive}
        nav
      >
        <div className={cx("item")}>
          <div className={cx("item_card")}>
            <Image src={thumb} alt="thumb" />
            <b className={cx("title_card")}>XÂY DỰNG VÀ KIẾN TRÚC</b>
            <Button
              link="https://hicas.vn/"
              backgroundColor="transparent"
              width="70%"
              border="1px solid #C4C4C4"
              borderRadius="20px"
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("item_card")}>
            <Image src={thumb} alt="thumb" />
            <Button
              link="https://hicas.vn/"
              backgroundColor="transparent"
              width="70%"
              border="1px solid #C4C4C4"
              borderRadius="20px"
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("item_card")}>
            <Image src={thumb} alt="thumb" />
            <Button
              link="https://hicas.vn/"
              backgroundColor="transparent"
              width="70%"
              border="1px solid #C4C4C4"
              borderRadius="20px"
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
        <div className={cx("item")}>
          <div className={cx("item_card")}>
            <Image src={thumb} alt="thumb" />
            <Button
              link="https://hicas.vn/"
              backgroundColor="transparent"
              width="70%"
              border="1px solid #C4C4C4"
              borderRadius="20px"
            >
              Xem chi tiết
            </Button>
          </div>
        </div>
      </OwlCarousel>
    </div>
  );
}

export default CardService;
