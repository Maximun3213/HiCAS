import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./cardProduct.module.scss";
import Button from "../button";

const cx = classNames.bind(styles);

function CardProduct() {
  const [products, setProducts] = useState([]);
  const API_URL = process.env.API_URL;
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);
  useEffect(() => {
    fetch(`${API_URL}/typical-products?_locale=` + locale)
      .then((res) => res.json())
      .then((product) => {
        setProducts(product);
      });
  }, []);

  return (
    <div className={cx("container")}>
      <div className={cx("card_wapper")}>
        {products.map((value) => (
          <div className={cx("card")} key={value.id}>
            <div
              className={cx("card_image")}
              style={{
                backgroundImage: `url(${API_URL + value.Image.url})`,
                width: "100%",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            ></div>
            <div className={cx("card_content")}>
              <Image
                src={API_URL + value.icon.url}
                alt="icon"
                width={40}
                height={40}
              />
              <b className={cx("card_title")}>{value.title}</b>
              <p className={cx("card_decs")}>{value.decs}</p>
              <div className={cx("card_btn")}>
                <Button
                  link="https://hicas.vn/"
                  backgroundColor="transparent"
                  width="100%"
                  height="35px"
                  border="1px solid #C4C4C4"
                  borderRadius="20px"
                  margin="4% auto"
                >
                  {value.title_button}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardProduct;
