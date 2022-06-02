import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./footer.module.scss";
import logoFooter from "../../assets/images/logo/logo_footer.png";
import { useState, useEffect } from "react";

const cx = classNames.bind(styles);

function Footer() {
  const [social, setSocial] = useState([]);
  const API_URL = process.env.API_URL;

  useEffect(() => {
    fetch(`${API_URL}/social-medias`)
      .then((res) => res.json())
      .then((social) => {
        setSocial(social);
      });
  }, []);

  return (
    <footer className={cx("footer")}>
      <div className={cx("footer_main")}>
        <div className={cx("container")}>
          <div className={cx("footer_top")}>
            <div className={cx("footer_item", "col_logo")}>
              <Image src={logoFooter} alt="Logo" />
              <p className={cx("footer_menu")}>
                Người Việt, sản phẩm Việt, chất lượng quốc tế
              </p>
              <ul className={cx("social")}>
                {social.map((data) => (
                  <li key={data.id}>
                    <Link href={data.url}>
                      <Image
                        src={API_URL + data.Image.url}
                        alt="facebook"
                        width={data.Image.width}
                        height={data.Image.height}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={cx("footer_item")}>
              <h4>Sản phẩm</h4>
              <ul className={cx("footer_menu")}>
                <li>
                  <Link href="">
                    <a>SmartMTO</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>AnyOn</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>ViThep</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Ting Connect</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={cx("footer_item")}>
              <h4>Về chúng tôi</h4>
              <ul className={cx("footer_menu")}>
                <li>
                  <Link href="">
                    <a>Giới thiệu</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Liên hệ</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Tuyển dụng</a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a>Blog</a>
                  </Link>
                </li>
              </ul>
            </div>
            <div className={cx("footer_item")}>
              <h4>Đăng ký nhận thông tin</h4>
              <p className={cx("footer_menu")}>
                Send me updates from Hicas Software
              </p>
              <form action="" className={cx("form")}>
                <input type="text" placeholder="Enter your email address" />
                <button>
                  <FontAwesomeIcon icon={faPaperPlane} style={{ width: 25 }} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("footer_bottom")}>
        <p>© All Copyright 2022 by Hicas.vn</p>
      </div>
    </footer>
  );
}

export default Footer;