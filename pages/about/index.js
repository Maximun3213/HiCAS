import classNames from "classnames/bind";
import { Fragment } from "react";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import CardMission from "../../src/components/cardMission";
import CardCircle from "../../src/components/cardCircle";
import BannerSlug from "../../src/components/bannerSlug";
import styles from "./about.module.scss";
import TitleSection from "../../src/components/titleSection";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";

const cx = classNames.bind(styles);

function About({ header, introduction, mission, value, footer }) {
  const API_URL = process.env.API_URL;
  const router = useRouter();

  return (
    <Fragment>
      <Header header={header} />
      {router.locale === "en" ? (
        <>
          <BannerSlug image="/images/bannerAbout.jpg" title="ABOUT US" />
          <TitleSection>Introduction</TitleSection>
        </>
      ) : (
        <>
          <BannerSlug image="/images/bannerAbout.jpg" title="Về chúng tôi" />
          <TitleSection>Giới thiệu</TitleSection>
        </>
      )}
      <section>
        <div className={cx("container")}>
          {introduction &&
            introduction.map((value) => (
              <div className={cx("about_wapper")} key={value.id}>
                <div className={cx("about_content")}>
                  <h3>{value.title}</h3>
                  <ReactMarkdown>{value.decs}</ReactMarkdown>
                </div>
                <div
                  className={cx("about_img")}
                  style={{
                    backgroundImage: `url(${API_URL + value.Img.url})`,
                  }}
                ></div>
              </div>
            ))}
        </div>
      </section>
      <section>
        {router.locale === "en" ? (
          <TitleSection>Vision - mission</TitleSection>
        ) : (
          <TitleSection>Tầm nhìn - sứ mệnh</TitleSection>
        )}

        <div className={cx("container")}>
          <div className={cx("card_wapper")}>
            {mission.map((value) => (
              <CardMission
                title={value.title}
                text={value.decs}
                img={value.img.url}
                key={value.id}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        {router.locale === "en" ? (
          <TitleSection>Our Values</TitleSection>
        ) : (
          <TitleSection>Giá trị của chúng tôi</TitleSection>
        )}
        <div className={cx("container")}>
          <div className={cx("card_wapper")}>
            {value.map((item) => (
              <CardCircle img={item.icon.url} title={item.decs} key={item.id} />
            ))}
          </div>
        </div>
      </section>
      <Footer footer={footer} />
    </Fragment>
  );
}

export default About;

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

  //Fetch API Introduction
  let translationIntroduction = undefined;
  const introductionRes = await fetch(`${API_URL}/introductions`);
  const introduction = await introductionRes.json();
  if (locale === "en") {
    const translationIntroductionRes = await fetch(
      `${API_URL}/introductions?_locale=` + locale
    );
    translationIntroduction = await translationIntroductionRes.json();
  }

  //Fetch API missons
  let translationMission = undefined;
  const missionRes = await fetch(`${API_URL}/missons`);
  const misson = await missionRes.json();
  if (locale === "en") {
    const translationMissonRes = await fetch(
      `${API_URL}/missons?_locale=` + locale
    );
    translationMission = await translationMissonRes.json();
  }

  //Fetch API Values
  let translationValue = undefined;
  const valueRes = await fetch(`${API_URL}/our-values`);
  const value = await valueRes.json();
  if (locale === "en") {
    const translationValueRes = await fetch(
      `${API_URL}/our-values?_locale=` + locale
    );
    translationValue = await translationValueRes.json();
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

  return {
    props: {
      header: translationHeader ? translationHeader : header,
      introduction: translationIntroduction
        ? translationIntroduction
        : introduction,
      mission: translationMission ? translationMission : misson,
      value: translationValue ? translationValue : value,
      footer: translationFooter ? translationFooter : footer,
    },
  };
}
