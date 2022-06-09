import { Fragment, useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import {
  faMagnifyingGlass,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import styles from "./header.module.scss";
import useOnClickOutside from "../../hooks/useComponentVisible";
import MainRoute from "./menu";
import Language from "./selectLanguage";
import Logo from "../../assets/images/logo/logo.png";

const cx = classNames.bind(styles);

function Header() {
  const ref = useRef();
  const [isNavOpen, setNavOpen] = useState(false);
  useOnClickOutside(ref, () => setNavOpen(false));

  const search = useRef();
  const [isSeacrhOpen, setSearchOpen] = useState(false);
  useOnClickOutside(search, () => setSearchOpen(false));

  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const { locale } = useRouter();

  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <Link href="/">
          <a>
            <Image src={Logo} alt="HiCas Logo" width={140} height={45} />
          </a>
        </Link>
        <div className={cx("menu")}>
          {isSeacrhOpen ? (
            <div className={cx("search-wapper")}>
              <div className={cx("search-box")}>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Type to search"
                  className={cx("search-txt")}
                />
                <a href="" className={cx("search-btn")}>
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ width: 20 }}
                  />
                </a>
              </div>
              <button
                className={cx("close-btn")}
                onClick={() => setSearchOpen(false)}
              >
                <FontAwesomeIcon icon={faXmark} style={{ width: 20 }} />
              </button>
            </div>
          ) : (
            <div ref={search} style={{ display: "flex", alignItems: "center" }}>
              <div className={cx("nav_bar_res")}>
                <MainRoute />
              </div>
              <div className={cx("menu_action")}>
                <button
                  className={cx("btn_search")}
                  onClick={() => setSearchOpen(true)}
                >
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    style={{ width: 20 }}
                  />
                </button>
                <div className={cx("header_line")}></div>
                {!isSSR && <Language />}
                <button className={cx("btn", "header_btn")}>
                  {locale === "en" ? (
                    <Link href="/contact">CONTACT</Link>
                  ) : (
                    <Link href="/contact">LIÊN HỆ</Link>
                  )}
                </button>
              </div>
            </div>
          )}

          {isNavOpen ? (
            <>
              <div className={cx("nav_bar")} ref={ref}>
                <div className={cx("menu_nav_bar")}>
                  <div className={cx("search-box")}>
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Type to search"
                      className={cx("search-txt")}
                    />
                    <a href="" className={cx("search-btn")}>
                      <FontAwesomeIcon
                        icon={faMagnifyingGlass}
                        style={{ width: 20 }}
                      />
                    </a>
                  </div>
                  <MainRoute />
                  <div className={cx("header_action")}>
                    <Language />
                    <button className={cx("btn", "header_btn")}>
                      {locale === "en" ? (
                        <Link href="/contact">CONTACT</Link>
                      ) : (
                        <Link href="/contact">LIÊN HỆ</Link>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              <div className={cx("nav")} onClick={() => setNavOpen(false)}>
                <FontAwesomeIcon icon={faXmark} style={{ width: 20 }} />
              </div>
            </>
          ) : (
            <div className={cx("nav")} onClick={() => setNavOpen(true)}>
              <FontAwesomeIcon icon={faBars} style={{ width: 20 }} />
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
