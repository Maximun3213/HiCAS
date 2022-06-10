import { Fragment } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import Header from "../../../src/components/header";
import Footer from "../../../src/components/footer";
import BannerSlug from "../../../src/components/bannerSlug";
import TitleSection from "../../../src/components/titleSection";
import CardPrice from "../../../src/components/cardPrice";
import Button from "../../../src/components/button";
import styles from "./ViThep.module.scss";

const cx = classNames.bind(styles);

function ViThep({ header, footer, productViThep, bannerViThep }) {
  const router = useRouter();

  const API_URL = process.env.API_URL;

  return (
    <Fragment>
      <Header header={header} />
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

      <TitleSection>{productViThep.title}</TitleSection>
      <div className={cx("container")}>
        <p className={cx("banner_content")}>{productViThep.decs}</p>
        <div className={cx("video_product")}>
          <iframe
            className={cx("video")}
            src={productViThep.video_link}
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
              backgroundImage: `url(${API_URL + productViThep.Img_card_1.url})`,
            }}
          ></div>
          <div className={cx("card_content")}>
            <Image src="/icon.png" alt="icon" width={50} height={50} />
            <ReactMarkdown>{productViThep.card_content_1}</ReactMarkdown>
          </div>
          <div className={cx("card_content")}>
            <Image src="/icon.png" alt="icon" width={50} height={50} />
            <ReactMarkdown>{productViThep.card_content_2}</ReactMarkdown>
          </div>
          <div
            className={cx("card_img", "element-class")}
            style={{
              backgroundImage: `url(${API_URL + productViThep.Img_card_2.url})`,
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
        {bannerViThep.map((value) => (
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
      <Footer footer={footer} />
    </Fragment>
  );
}

export default ViThep;

export async function getServerSideProps(context) {
  const API_URL = process.env.API_URL;
  const { locale } = context;

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

  //Fetch API Footer
  let translationFooter = undefined;
  const footerRes = await fetch(`${API_URL}/footers`);
  const footer = await footerRes.json();
  if (locale === "en") {
    const translationFooterRes = await fetch(
      `${API_URL}/footers?_locale=` + locale
    );
    translationFooter = await translationFooterRes.json();
  }

  //Fetch API Product ViThep
  let translationProductViThep = undefined;
  const productViThepRes = await fetch(`${API_URL}/product-vi-thep`);
  const productViThep = await productViThepRes.json();
  if (locale === "en") {
    const translationProductViThepRes = await fetch(
      `${API_URL}/product-vi-thep?_locale=` + locale
    );
    translationProductViThep = await translationProductViThepRes.json();
  }

  //Fetch API Product ViThep
  let translationBannerViTHEP = undefined;
  const bannerViThepRes = await fetch(`${API_URL}/trial-vithep-banners`);
  const bannerViThep = await bannerViThepRes.json();
  if (locale === "en") {
    const translationBannerViTHEPRes = await fetch(
      `${API_URL}/trial-vithep-banners?_locale=` + locale
    );
    translationBannerViTHEP = await translationBannerViTHEPRes.json();
  }

  return {
    props: {
      header: translationHeader ? translationHeader : header,
      productViThep: translationProductViThep
        ? translationProductViThep
        : productViThep,
      bannerViThep: translationBannerViTHEP
        ? translationBannerViTHEP
        : bannerViThep,
      footer: translationFooter ? translationFooter : footer,
    },
  };
}
