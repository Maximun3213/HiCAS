import React from "react";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Slider from "react-slick";
import classNames from "classnames/bind";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

import BannerBottom from "../src/components/bannerBottom";
import styles from "../styles/Home.module.css";
import Button from "../src/components/button";
import TitleSection from "../src/components/titleSection";

import CardService from "../src/components/cardService";
import CardProduct from "../src/components/cardProduct";
import CardTech from "../src/components/cardTech";
import CardBrand from "../src/components/cardBrand";
import Customer from "../src/components/customer";
import CardNews from "../src/components/cardNews";

const cx = classNames.bind(styles);

export default function Home() {
  const router = useRouter();
  const [banners, setBanners] = useState([]);
  const [locale, setLocale] = useState(router.locale);
  const API_URL = process.env.API_URL;

  useEffect(() => {
    fetch(`${API_URL}/banners?_locale=` + locale)
      .then((res) => res.json())
      .then((banner) => {
        setBanners(banner);
      });
  }, [locale]);
  var settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <Fragment>
      <Slider {...settings}>
        {banners.map((item) => (
          <div key={item.id} className={cx("banner")}>
            <div
              style={{
                backgroundImage: `url(${API_URL + item.Image.url})`,
              }}
              className={cx("banner_img")}
              key={item.id}
            >
              <div className={cx("container")}>
                <div className={cx("content")}>
                  <h3
                    className={cx("main_content")}
                    style={{ color: item.textColor }}
                  >
                    {item.mainTitle} <br /> {item.mainTitle2}
                  </h3>
                  <span style={{ color: item.textColor }}>
                    <p>{item.content1}</p>
                    <p>{item.content2}</p>
                  </span>
                  <div className={cx("banner_btn")}>
                    {router.locale === "en" ? (
                      <>
                        <Button
                          width="150px"
                          href=""
                          borderRadius="18px"
                          link={item.linkTryButton}
                          mainBtn="true"
                        >
                          Try it
                        </Button>
                        <Button
                          width="150px"
                          href=""
                          backgroundColor=""
                          margin="0 0 0 18px"
                          borderRadius="18px"
                          link={item.linkContactButton}
                        >
                          Contact
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button
                          width="150px"
                          href=""
                          borderRadius="18px"
                          link={item.linkTryButton}
                          mainBtn="true"
                        >
                          Dùng thử
                        </Button>
                        <Button
                          width="150px"
                          href=""
                          backgroundColor=""
                          margin="0 0 0 18px"
                          borderRadius="18px"
                          link={item.linkContactButton}
                        >
                          Liên hệ
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <BannerBottom />
      <section>
        {router.locale === "en" ? (
          <>
            <TitleSection>Serving industries</TitleSection>
            <p className={cx("title_decs")}>
              Following the 4.0 technology trend and digital transformation of
              the Construction and Manufacturing. We are like a customer IT
              department, helping customers Survey the actual operation of the
              enterprise to come up with an application plan technology as well
              as the most effective implementation plan.
            </p>
          </>
        ) : (
          <>
            <TitleSection>Phục vụ các ngành</TitleSection>
            <p className={cx("title_decs")}>
              Cùng theo xu hướng công nghệ 4.0 và chuyển đổi số các ngành Xây
              dựng và Sản xuất. Chúng tôi như 1 ban CNTT của khách hàng, giúp
              khách hàng khảo sát thực tế vận hành của Doanh nghiệp để đưa ra
              phương án áp dụng công nghệ cũng như kế hoạch thực hiện hiệu quả
              nhất.
            </p>
          </>
        )}
        <CardService />
      </section>
      <section className={cx("typical_product")}>
        {router.locale === "en" ? (
          <TitleSection>Featured products</TitleSection>
        ) : (
          <TitleSection>Sản phẩm tiêu biểu</TitleSection>
        )}
        <CardProduct />
      </section>
      <section className={cx("typical_tech")}>
        {router.locale === "en" ? (
          <TitleSection>Main technology</TitleSection>
        ) : (
          <TitleSection>Công nghệ chính</TitleSection>
        )}
        <CardTech />
      </section>
      <section className={cx("typical_product")}>
        {router.locale === "en" ? (
          <TitleSection>Strategic partnership</TitleSection>
        ) : (
          <TitleSection>Đối tác chiến lược</TitleSection>
        )}

        <CardBrand />
      </section>
      <section>
        {router.locale === "en" ? (
          <TitleSection>Customers talk about Hicas</TitleSection>
        ) : (
          <TitleSection>Khách hàng nói về Hicas</TitleSection>
        )}
        <Customer />
      </section>
      <section>
        {router.locale === "en" ? (
          <TitleSection>News - events</TitleSection>
        ) : (
          <TitleSection>Tin tức - sự kiện</TitleSection>
        )}
        <CardNews />
      </section>
    </Fragment>
  );
}
