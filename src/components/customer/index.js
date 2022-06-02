import React from "react";
import { Fragment, useEffect, useState } from "react";
import Slider from "react-slick";
import classNames from "classnames/bind";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

import user from "../../assets/images/user.jpg";
import styles from "./customer.module.scss";

var settings = {
  dots: true,
  arrows: true,
  speed: 500,
  autoplay: true,
  // dotsClass: "button__bar",
  appendDots: (dots) => <ul>{dots}</ul>,
  customPaging: (i) => <div className={cx("ft-slick__dots--custom")}></div>,
  swipe: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1380,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const cx = classNames.bind(styles);
function Customer() {
  const [reviews, setReviews] = useState([]);
  const API_URL = process.env.API_URL;
  useEffect(() => {
    fetch(`${API_URL}/reviews`)
      .then((res) => res.json())
      .then((review) => {
        setReviews(review);
      });
  }, []);
  return (
    <div className={cx("container")}>
      <Slider {...settings}>
        {reviews.map((value) => (
          <div className="" key={value.id}>
            <div className={cx("quote_wapper")}>
              <div className={cx("blockquote")}>
                <p>{value.Text}</p>
              </div>
              <div className={cx("quote_user")}>
                <div className={cx("quote_user_image")}>
                  <Image
                    src={API_URL + value.Avatar.url}
                    width="60px"
                    height="60px"
                    alt="user"
                  />
                </div>
                <div className={cx("quote_user_info")}>
                  <h4>{value.Name}</h4>
                  <p>{value.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Customer;
