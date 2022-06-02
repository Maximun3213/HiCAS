import Link from "next/link";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";

import styles from "./button.module.scss";

const cx = classNames.bind(styles);

function Button({
  width,
  height,
  link = "https://hicas.vn/",
  children,
  margin = 0,
  borderRadius,
  border = "none",
  mainBtn,
}) {
  const [colorText, setColor] = useState("");
  const [colorBackGround, setcolorBackGround] = useState("");
  useEffect(() => {
    if (mainBtn == "true") {
      setcolorBackGround("#FB8020");
      setColor("#fff");
    }
  }, [mainBtn]);
  function handleClick(e) {
    window.open(link);
  }
  return (
    <button
      style={{
        width: width,
        height: height,
        backgroundColor: colorBackGround,
        border: "none",
        outline: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: margin,
        borderRadius: borderRadius,
        paddingTop: "11px",
        paddingBottom: " 11px",
        fontSize: "1.5rem",
        color: colorText,
        border: border,
      }}
      onClick={handleClick}
      className={cx("main_button")}
    >
      <Link href="">
        <a style={{ fontWeight: 800 }}>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ width: 6, marginRight: 10 }}
          />
          {children}
        </a>
      </Link>
    </button>
  );
}
export default Button;
