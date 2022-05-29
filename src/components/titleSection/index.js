import classNames from "classnames/bind";
import styles from "./titleSection.module.scss";

const cx = classNames.bind(styles);

function TitleSection({ children }) {
  return (
    <div className={cx("container")}>
      <div className={cx("title_section")}>
        <p className={cx("title_background")}>HICAS</p>
        <h2>{children}</h2>
      </div>
    </div>
  );
}

export default TitleSection;
