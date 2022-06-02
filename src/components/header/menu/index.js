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
        // <li key={item.id}>{item.title}</li>
        <li
          key={item.id}
          className={router.pathname == item.url ? cx("active") : ""}
        >
          <Link href={item.url}>
            <a>{item.title}</a>
          </Link>
          {/* <FontAwesomeIcon
          icon={faAngleDown}
          style={{ width: 10 }}
          className={cx("menu_arrow")}
        /> */}
          {/* <ul className={cx("dropdown_nav")}>
            <li>
              <Link href="">
                <a>Link 2</a>
              </Link>
            </li>
            <li>
              <Link href="">
                <a>Link 3</a>
              </Link>
            </li>
          </ul> */}
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
