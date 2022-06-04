import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./cardBrand.module.scss";
import Image from "next/image";

const cx = classNames.bind(styles);

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div className={cx("NextArrow")} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleRight} width={10} />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div className={cx("PrevArrow")} onClick={onClick}>
      <FontAwesomeIcon icon={faAngleLeft} width={10} />
    </div>
  );
}

var settings = {
  arrows: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  speed: 500,
  autoplay: true,
  slidesToShow: 6,
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
      },
    },
  ],
};

function CardBrand() {
  const [brands, setBrands] = useState([]);
  const API_URL = process.env.API_URL;
  useEffect(() => {
    fetch(`${API_URL}/brands`)
      .then((res) => res.json())
      .then((majors) => {
        setBrands(majors);
      });
  }, []);
  return (
    <div className={cx("container")}>
      <Slider {...settings}>
        {brands.map((value) => (
          <div className="" key={value.id}>
            <div className={cx("card")}>
              <div
                className={cx("card_image")}
                style={{
                  backgroundImage: `url(${API_URL + value.Image.url})`,
                  width: "80%",
                  height: "60%",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CardBrand;
