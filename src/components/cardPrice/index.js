import classNames from "classnames/bind";

import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import styles from "./cardPrice.module.scss";
import { Fragment, useState, useEffect } from "react";

const cx = classNames.bind(styles);

function CardPrice() {
  const [listFunction, setListFunction] = useState([]);

  const API_URL = process.env.API_URL;
  useEffect(() => {
    fetch(`${API_URL}/card-prices`)
      .then((res) => res.json())
      .then((list) => {
        setListFunction(list);
      });
  }, []);
  return (
    <Fragment>
      {listFunction.map((value) => (
        <div className={cx("card_wapper")} key={value.id}>
          <div
            className={cx("card_header")}
            style={{ backgroundColor: `${value.color_card}` }}
          >
            <h4>{value.title}</h4>
            <p>{value.decs}</p>
          </div>
          <div className={cx("price")}>
            <b>
              {value.Price}
              <sup>/{value.Time}</sup>
            </b>
          </div>
          <ul className={cx("table-list")}>
            {value.service_card_prices.map((item) => (
              <li key={item.id}>
                {item.YesOrNo == true ? (
                  <FontAwesomeIcon
                    icon={faCheck}
                    className={cx("icon_check", "icon")}
                  />
                ) : (
                  <FontAwesomeIcon
                    icon={faXmark}
                    className={cx("icon_close")}
                  />
                )}
                {item.title}
              </li>
            ))}
          </ul>
          <div className={cx("card_price_btn")}>
            <Button
              width="180px"
              borderRadius="20px"
              mainBtn="true"
              link={value.link}
            >
              Mua ngay
            </Button>
          </div>
        </div>
      ))}
    </Fragment>
  );
}

export default CardPrice;
