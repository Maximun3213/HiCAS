import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, forwardRef } from "react";
import { useRouter } from "next/router";

import styles from "./footer.module.scss";
import logoFooter from "../../assets/images/logo/logo_footer.png";

const cx = classNames.bind(styles);

function Footer() {
  const [social, setSocial] = useState([]);
  const [itemLink, setItemLink] = useState([]);
  const API_URL = process.env.API_URL;
  const router = useRouter();
  const [locale, setLocale] = useState(router.locale);

  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/social-medias`)
      .then((res) => res.json())
      .then((social) => {
        setSocial(social);
      });
    fetch(`${API_URL}/footers?_locale=` + locale)
      .then((res) => res.json())
      .then((footer) => {
        setItemLink(footer);
      });
  }, []);

  async function addEmail() {
    const Email = {
      Email: email,
    };
    const add = await fetch(`${API_URL}/email-get-news`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(Email),
    });

    const addResponse = await add.json();

    if (add.status === 200) {
      alert("Cảm ơn bạn đã đăng ký nhận thông tin");
      setEmail("");
    } else {
      alert("Đăng ký không thành công");
    }
  }

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
                        alt="icon"
                        width={data.Image.width}
                        height={data.Image.height}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {itemLink.map((value) => (
              <div className={cx("footer_item")} key={value.id}>
                <h4>{value.title}</h4>
                <ul className={cx("footer_menu")}>
                  {value.items_footers.map((item) => (
                    <li key={item.id}>
                      <Link href={item.link}>
                        <a>{item.title_link}</a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className={cx("footer_item")}>
              {router.locale === "en" ? (
                <>
                  <h4>Sign up get information</h4>
                  <p className={cx("footer_menu")}>
                    Send me updates from Hicas Software
                  </p>
                  <form action="" className={cx("form")}>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <button type="button" onClick={() => addEmail()}>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{ width: 25 }}
                      />
                    </button>
                  </form>
                </>
              ) : (
                <>
                  <h4>Đăng ký nhận thông tin</h4>
                  <p className={cx("footer_menu")}>
                    Gửi cho tôi các bản cập nhật từ Phần mềm Hicas
                  </p>
                  <form action="" className={cx("form")}>
                    <input
                      type="email"
                      placeholder="Hãy nhập email của bạn"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                    <button type="button" onClick={() => addEmail()}>
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        style={{ width: 25 }}
                      />
                    </button>
                  </form>
                </>
              )}
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
