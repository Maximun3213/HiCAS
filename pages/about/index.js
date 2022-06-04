import classNames from "classnames/bind";
import { Fragment, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

import CardMission from "../../src/components/cardMission";
import CardCircle from "../../src/components/cardCircle";
import BannerSlug from "../../src/components/bannerSlug";
import styles from "./about.module.scss";
import TitleSection from "../../src/components/titleSection";

const cx = classNames.bind(styles);

function About() {
  const [introduce, setIntroduce] = useState([]);
  const [missons, setMisson] = useState([]);
  const [values, setValues] = useState([]);
  const API_URL = process.env.API_URL;

  useEffect(() => {
    fetch(`${API_URL}/introductions`)
      .then((res) => res.json())
      .then((intro) => {
        setIntroduce(intro);
      });
    fetch(`${API_URL}/missons`)
      .then((res) => res.json())
      .then((misson) => {
        setMisson(misson);
      });
    fetch(`${API_URL}/our-values`)
      .then((res) => res.json())
      .then((value) => {
        setValues(value);
      });
  }, []);

  return (
    <Fragment>
      <BannerSlug
        image="/images/bannerAbout.jpg"
        title="Về chúng tôi"
        slug="/about"
        titleSlug="Về chúng tôi"
      />
      <section>
        <TitleSection>Giới thiệu</TitleSection>
        <div className={cx("container")}>
          {introduce &&
            introduce.map((value) => (
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
        <TitleSection>Tầm nhìn - sứ mệnh</TitleSection>
        <div className={cx("container")}>
          <div className={cx("card_wapper")}>
            {missons.map((value) => (
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
        <TitleSection>Giá trị của chúng tôi</TitleSection>
        <div className={cx("container")}>
          <div className={cx("card_wapper")}>
            {values.map((item) => (
              <CardCircle img={item.icon.url} title={item.decs} key={item.id} />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}

export default About;
