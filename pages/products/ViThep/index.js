import { Fragment, useEffect, useState } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import BannerSlug from "../../../src/components/bannerSlug";
import TitleSection from "../../../src/components/titleSection";
import CardPrice from "../../../src/components/cardPrice";
import Button from "../../../src/components/button";
import styles from "./ViThep.module.scss";

const cx = classNames.bind(styles);

function ViThep() {
  const [items, setItems] = useState({});
  const [bannerViTHEP, setBannerViTHEP] = useState([]);
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);
  const API_URL = process.env.API_URL;
  useEffect(() => {
    fetch(`${API_URL}/product-vi-thep?_locale=` + locale)
      .then((res) => res.json())
      .then((item) => {
        setItems(item);
      });
    fetch(`${API_URL}/trial-vithep-banners?_locale=` + locale)
      .then((res) => res.json())
      .then((banner) => {
        setBannerViTHEP(banner);
      });
  }, []);

  return (
    <Fragment>
      {router.locale === "en" ? (
        <BannerSlug
          image="/images/bannerViThep.jpg"
          title="STEEL Structural 3D INFORMATION MODEL
        FOR CONSTRUCTION AND MANUFACTURING"
          titleSlug="ViTHEP"
        />
      ) : (
        <BannerSlug
          image="/images/bannerViThep.jpg"
          title="MÔ HÌNH THÔNG TIN 3D KẾT CẤU THÉP
      CHO XÂY DỰNG VÀ CHẾ TẠO"
          titleSlug="ViTHEP"
        />
      )}

      <TitleSection>{items.title}</TitleSection>
      <div className={cx("container")}>
        <p className={cx("banner_content")}>{items.decs}</p>
        <div className={cx("video_product")}>
          <iframe
            className={cx("video")}
            src={items.video_link}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      {router.locale === "en" ? (
        <TitleSection>Why choose ViTHEP?</TitleSection>
      ) : (
        <TitleSection>Vì sao chọn ViTHEP ?</TitleSection>
      )}
      <div className={cx("container")}>
        <div className={cx("card_wapper")}>
          <div
            className={cx("card_img", "element-class")}
            style={{
              // backgroundImage: `url(${API_URL + items.Img_card_1.url})`,
              backgroundImage: `url("/images/ViThep.jpg")`,
            }}
          ></div>
          <div className={cx("card_content")}>
            <Image src="/icon.png" alt="icon" width={50} height={50} />
            <ReactMarkdown>{items.card_content_1}</ReactMarkdown>
          </div>
          <div className={cx("card_content")}>
            <Image src="/icon.png" alt="icon" width={50} height={50} />
            <ReactMarkdown>{items.card_content_2}</ReactMarkdown>
          </div>
          <div
            className={cx("card_img", "element-class")}
            style={{
              // backgroundImage: `url(${API_URL + value.Img.url})`,
              backgroundImage: `url("/images/ViThep2.png")`,
            }}
          ></div>
        </div>
      </div>
      <section className={cx("background")}>
        {router.locale === "en" ? (
          <TitleSection>Optimal cost</TitleSection>
        ) : (
          <TitleSection>Chi phí tối ưu</TitleSection>
        )}

        <div className={cx("container")}>
          <div className={cx("card_price_wapper")}>
            <CardPrice />
          </div>
        </div>
      </section>
      <section>
        {bannerViTHEP.map((value) => (
          <div
            className={cx("banner_bottom")}
            style={{ backgroundImage: `url(${API_URL + value.img.url})` }}
            key={value.id}
          >
            <div className={cx("banner_content")}>
              <ReactMarkdown>{value.title}</ReactMarkdown>
              <Button
                mainBtn="true"
                width="200px"
                borderRadius="20px"
                margin="5% 0"
                link={value.link}
              >
                {value.title_button}
              </Button>
            </div>
          </div>
        ))}
      </section>
    </Fragment>
  );
}

export default ViThep;
