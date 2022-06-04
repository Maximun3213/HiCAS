import classNames from "classnames/bind";
import Image from "next/image";

import styles from "./cardCircle.module.scss";
const cx = classNames.bind(styles);
function CardCircle({ img, title }) {
  const API_URL = process.env.API_URL;
  return (
    <div className={cx("card_wapper")}>
      <div className={cx("card_img")}>
        <Image src={API_URL + img} width={65} height={65} alt="icon" />
      </div>
      <div className={cx("card_content")}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default CardCircle;
