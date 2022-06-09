import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { faNewspaper, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./bannerBottom.module.scss";

const cx = classNames.bind(styles);
function BannerBottom() {
  const [banner, setBanner] = useState({});
  const API_URL = process.env.API_URL;

  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);

  useEffect(() => {
    fetch(`${API_URL}/banner-bottom?_locale=` + locale)
      .then((res) => res.json())
      .then((banner) => {
        setBanner(banner);
      });
  }, []);

  return (
    <div className={cx("banner")}>
      <div className={cx("container")}>
        <div className={cx("banner_item")}>
          <div className={cx("banner_icon")}>
            <FontAwesomeIcon icon={faNewspaper} style={{ width: 25 }} />
          </div>
          <Link href="https://hicas.vn/">
            <a className={cx("banner_title")}>{banner.title}</a>
          </Link>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ width: 10, color: "#fff" }}
          />
        </div>
      </div>
    </div>
  );
}

export default BannerBottom;
