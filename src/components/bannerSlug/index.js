import classNames from "classnames/bind";
import styles from "./bannerSlug.module.scss";
import Link from "next/link";

import Banner from "../../assets/images/banner/banner1.jpg";

const cx = classNames.bind(styles);

function BannerSlug({ image, title, slug, titleSlug }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={cx("banner")}
    >
      <div className={cx("banner_content")}>
        <div className={cx("container")}>
          <h2>{title}</h2>
          <p>
            <Link href="/">
              <a>Trang chủ</a>
            </Link>
            /
            <Link href={slug}>
              <a>{titleSlug}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerSlug;
