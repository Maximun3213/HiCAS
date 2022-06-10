import { Fragment } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import TitleSection from "../../src/components/titleSection";
import Header from "../../src/components/header";
import Footer from "../../src/components/footer";
import styles from "./products.module.scss";
const cx = classNames.bind(styles);

function Products({ header, product, footer }) {
  const router = useRouter();
  const API_URL = process.env.API_URL;

  return (
    <Fragment>
      <Header header={header} />
      {router.locale === "en" ? (
        <TitleSection>Typical products</TitleSection>
      ) : (
        <TitleSection>Sản phẩm tiêu biểu</TitleSection>
      )}

      <div className={cx("container")}>
        <div className={cx("wapper")}>
          {product.map((value) => (
            <div className={cx("card")} key={value.id}>
              <div className={cx("img_wapper")}>
                <Image
                  src={API_URL + value.img.url}
                  alt="img"
                  width="150px"
                  height="150px"
                  className={cx("img")}
                />
              </div>
              <div className={cx("card_content")}>
                <div className={cx("card_title")}>
                  <h3>{value.title}</h3>
                  <div className={cx("link_card")}>
                    <Link href={value.link}>
                      <FontAwesomeIcon
                        icon={faArrowRightLong}
                        className={cx("icon")}
                      />
                    </Link>
                  </div>
                </div>
                <p>{value.decs}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer footer={footer} />
    </Fragment>
  );
}

export default Products;

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

  //Fetch API Products
  let translationProducts = undefined;
  const productsRes = await fetch(`${API_URL}/products`);
  const product = await productsRes.json();
  if (locale === "en") {
    const translationHeaderRes = await fetch(
      `${API_URL}/products?_locale=` + locale
    );
    translationProducts = await translationHeaderRes.json();
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
      product: translationProducts ? translationProducts : product,
      footer: translationFooter ? translationFooter : footer,
    },
  };
}
