import classNames from "classnames/bind";
import styles from "./cardMission.module.scss";

const cx = classNames.bind(styles);

function CardMission({ img, title, text }) {
  const API_URL = process.env.API_URL;
  return (
    <div className={cx("card")}>
      <div
        className={cx("card_img")}
        style={{
          backgroundImage: `url(${API_URL + img})`,
        }}
      ></div>
      <div className={cx("card_content")}>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CardMission;
