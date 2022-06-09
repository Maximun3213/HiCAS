import classNames from "classnames/bind";
import useRouter from "next/router";
import styles from "./select.module.scss";
import Link from "next/link";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cx = classNames.bind(styles);

function Language() {
  return (
    <div className={cx("select_wapper")}>
      <div className={cx("select")}>
        {useRouter.locale == "en" ? <h3>EN</h3> : <h3>VI</h3>}
        <FontAwesomeIcon
          icon={faAngleDown}
          style={{ width: 10 }}
          className={cx("menu_arrow")}
        />
      </div>
      <div className={cx("option")}>
        <Link href={useRouter.asPath} locale="vi-VN">
          <a>VI</a>
        </Link>
        <Link href={useRouter.asPath} locale="en">
          <a>EN</a>
        </Link>
      </div>
    </div>
  );
}

export default Language;
