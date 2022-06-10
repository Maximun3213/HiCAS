import React from "react";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Slider from "react-slick";
import classNames from "classnames/bind";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import BannerBottom from "../src/components/bannerBottom";
import styles from "../styles/Home.module.css";
import Button from "../src/components/button";
import TitleSection from "../src/components/titleSection";

import Header from "../src/components/header";
import CardService from "../src/components/cardService";
import CardProduct from "../src/components/cardProduct";
import CardTech from "../src/components/cardTech";
import CardBrand from "../src/components/cardBrand";
import Customer from "../src/components/customer";
import CardNews from "../src/components/cardNews";

const cx = classNames.bind(styles);

export default function Home({
  banner,
  header,
  bannerBottom,
  cardService,
  product,
  news,
}) {
  const router = useRouter();
  console.log(news);
  const API_URL = process.env.API_URL;
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
      <Header header={header} />
      <Slider {...settings}>
        {banner.map((item) => (
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
      <BannerBottom bannerBottom={bannerBottom} />
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
        <CardService cardService={cardService} />
      </section>
      <section className={cx("typical_product")}>
        {router.locale === "en" ? (
          <TitleSection>Featured products</TitleSection>
        ) : (
          <TitleSection>Sản phẩm tiêu biểu</TitleSection>
        )}
        <div className={cx("container")}>
          <div className={cx("cardProduct_wapper")}>
            {product.map((value) => (
              <CardProduct
                key={value.id}
                Img={value.Image.url}
                Icon={value.icon.url}
                titleBtn={value.title_button}
                title={value.title}
                decs={value.decs}
              />
            ))}
          </div>
        </div>
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
        <div className={cx("container")}>
          <div className={cx("card_news_wapper")}>
            {news.map((value) => (
              <CardNews
                key={value.id}
                link={value.link}
                img={value.image[0].url}
                title={value.title}
              />
            ))}
          </div>
          <div className={cx("card_news_btn")}>
            {router.locale === "en" ? (
              <Button width="170px" href="" borderRadius="18px" mainBtn="true">
                See more
              </Button>
            ) : (
              <Button width="170px" href="" borderRadius="18px" mainBtn="true">
                Xem thêm
              </Button>
            )}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const API_URL = process.env.API_URL;
  const { locale } = context;

  //Fetch API Banner
  let translationBanner = undefined;
  const bannersRes = await fetch(`${API_URL}/banners`);
  const banners = await bannersRes.json();
  if (locale === "en") {
    const translationBannerRes = await fetch(
      `${API_URL}/banners?_locale=` + locale
    );
    translationBanner = await translationBannerRes.json();
  }

  //Fetch API Header menu
  let translationHeader = undefined;
  const HeaderRes = await fetch(`${API_URL}/headers`);
  const header = await HeaderRes.json();
  if (locale === "en") {
    const translationHeaderRes = await fetch(
      `${API_URL}/headers?_locale=` + locale
    );
    translationHeader = await translationHeaderRes.json();
  }

  //Fetch API Banner Bottom
  let translationBannerBottom = undefined;
  const bannerBottomRes = await fetch(`${API_URL}/banner-bottom`);
  const bannerBottom = await bannerBottomRes.json();
  if (locale === "en") {
    const translationBannerBottomRes = await fetch(
      `${API_URL}/banner-bottom?_locale=` + locale
    );
    translationBannerBottom = await translationBannerBottomRes.json();
  }

  //Fetch API Card Service
  let translationCardService = undefined;
  const cardServiceRes = await fetch(`${API_URL}/majors`);
  const cardService = await cardServiceRes.json();
  if (locale === "en") {
    const translationCardServiceRes = await fetch(
      `${API_URL}/majors?_locale=` + locale
    );
    translationCardService = await translationCardServiceRes.json();
  }

  //Fetch API Card Product
  let translationCardProduct = undefined;
  const cardProductRes = await fetch(`${API_URL}/typical-products`);
  const cardProduct = await cardProductRes.json();
  if (locale === "en") {
    const translationCardProductRes = await fetch(
      `${API_URL}/typical-products?_locale=` + locale
    );
    translationCardProduct = await translationCardProductRes.json();
  }

  //Fetch API News
  let translationNews = undefined;
  const newsRes = await fetch(`${API_URL}/news-cards`);
  const news = await newsRes.json();
  if (locale === "en") {
    const translationNewsRes = await fetch(
      `${API_URL}/news-cards?_locale=` + locale
    );
    translationNews = await translationNewsRes.json();
  }

  return {
    props: {
      banner: translationBanner ? translationBanner : banners,
      header: translationHeader ? translationHeader : header,
      bannerBottom: translationBannerBottom
        ? translationBannerBottom
        : bannerBottom,
      cardService: translationCardService
        ? translationCardService
        : cardService,
      product: translationCardProduct ? translationCardProduct : cardProduct,
      news: translationNews ? translationNews : news,
    },
  };
}
