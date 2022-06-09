import React, { useEffect, useState } from "react";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Slider from "react-slick";
import classNames from "classnames/bind";
import { useRouter } from "next/router";

import styles from "./cardService.module.scss";
import Button from "../button";
const cx = classNames.bind(styles);

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={cx("NextArrow")} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} width={15} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={cx("PrevArrow")} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} width={15} />
    </div>
  );
}

var settings = {
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 500,
      },
    },
  ],
};

function CardService() {
  const [major, setMajor] = useState([]);
  const API_URL = process.env.API_URL;
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);
  useEffect(() => {
    fetch(`${API_URL}/majors?_locale=` + locale)
      .then((res) => res.json())
      .then((majors) => {
        setMajor(majors);
      });
  }, []);
  return (
    <div className={cx("container")}>
      <Slider {...settings}>
        {major.map((value) => (
          <div className="" key={value.id}>
            <div className={cx("card")}>
              <div
                className={cx("card_image")}
                style={{
                  backgroundImage: `url(${API_URL + value.Image.url})`,
                  width: "100%",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className={cx("card_content")}>
                <b className={cx("card_title")}>{value.title_major}</b>
                <div className={cx("card_line")}></div>
                <p className={cx("card_decs")}>{value.decs}</p>
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
                    {value.title_button}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardService;
