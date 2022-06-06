import { Fragment, useState, useRef } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import {
  faMagnifyingGlass,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./header.module.scss";
import useOnClickOutside from "../../hooks/useComponentVisible";
import MainRoute from "./menu";
import Logo from "../../assets/images/logo/logo.png";

const cx = classNames.bind(styles);

function Header() {
  const ref = useRef();
  const [isNavOpen, setNavOpen] = useState(false);
  useOnClickOutside(ref, () => setNavOpen(false));

  const search = useRef();
  const [isSeacrhOpen, setSearchOpen] = useState(false);
  useOnClickOutside(search, () => setSearchOpen(false));

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
                <select name="" id="" className={cx("header_select")}>
                  <option value="VI">VI</option>
                  <option value="EN">EN</option>
                </select>
                <button className={cx("btn", "header_btn")}>
                  <Link href="/contact">Liên hệ</Link>
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
                    <select name="" id="" className={cx("header_select")}>
                      <option value="VI">VI</option>
                      <option value="EN">EN</option>
                    </select>
                    <button className={cx("btn", "header_btn")}>
                      <Link href="/contact">Liên hệ</Link>
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
