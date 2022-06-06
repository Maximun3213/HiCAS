import Link from "next/link";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../header.module.scss";

const cx = classNames.bind(styles);

function MainRoute() {
  const API_URL = process.env.API_URL;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/headers`)
      .then((res) => res.json())
      .then((items) => {
        setItems(items);
      });
  }, []);
  const router = useRouter();
  return (
    <ul className={cx("menu_item")}>
      {items.map((item) => (
        <li
          key={item.id}
          className={
            router.pathname == item.url
              ? cx("active", "dropdown")
              : cx("dropdown")
          }
        >
          <Link href={item.url}>
            <a>{item.title}</a>
          </Link>
          {item.dropdown == true ? (
            <FontAwesomeIcon
              icon={faAngleDown}
              style={{ width: 10 }}
              className={cx("menu_arrow")}
            />
          ) : (
            ""
          )}
          {item.dropdown == true ? (
            <ul className={cx("dropdown_nav")}>
              {item.dropdown_items.map((value) => (
                <li
                  key={value.id}
                  className={
                    router.pathname == value.link
                      ? cx("active_text_dropdown")
                      : ""
                  }
                >
                  {console.log(router.pathname)}
                  <Link href={value.link}>
                    <a>{value.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
}

export default MainRoute;
