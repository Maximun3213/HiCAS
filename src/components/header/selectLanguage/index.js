import classNames from "classnames/bind";
import useRouter from "next/router";
import styles from "./select.module.scss";
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
        <a href={"http://localhost:3000" + useRouter.asPath}>VI</a>
        <a href={"http://localhost:3000/en" + useRouter.asPath}>EN</a>
      </div>
    </div>
  );
}

export default Language;
