import Link from "next/link";
import classNames from "classnames/bind";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../header.module.scss";

const cx = classNames.bind(styles);

function MainRoute() {
  // const API_URL = process.env;
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/headers")
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
              <li>
                <Link href="/products/ViThep">
                  <a>ViTHEP</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>SmartMTO</a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>AnyOn</a>
                </Link>
              </li>
            </ul>
          ) : (
            ""
          )}
        </li>
      ))}
    </ul>
  );
}

// export async function getStaticProps() {
//   const res = await fetch("http://localhost:1337/main-menu");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default MainRoute;
