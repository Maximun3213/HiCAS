import classNames from "classnames/bind";
import styles from "./bannerSlug.module.scss";
import { useRouter } from "next/router";
import Link from "next/link";

const cx = classNames.bind(styles);

function BannerSlug({ image, title, titleSlug }) {
  const router = useRouter();
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
            <Link href={router.pathname}>
              <a>{titleSlug}</a>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default BannerSlug;
