import { Fragment, useEffect, useState } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import TitleSection from "../../src/components/titleSection";
import styles from "./products.module.scss";
const cx = classNames.bind(styles);

function Products() {
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);
  const [products, setProducts] = useState([]);
  const API_URL = process.env.API_URL;

  useEffect(() => {
    fetch(`${API_URL}/products?_locale=` + locale)
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
      });
  }, [locale]);

  return (
    <Fragment>
      {router.locale === "en" ? (
        <TitleSection>Typical products</TitleSection>
      ) : (
        <TitleSection>Sản phẩm tiêu biểu</TitleSection>
      )}

      <div className={cx("container")}>
        <div className={cx("wapper")}>
          {products.map((value) => (
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
    </Fragment>
  );
}

export default Products;
