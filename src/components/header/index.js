import styles from "./header.module.scss";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import classNames from "classnames/bind";
import Link from "next/link";
import Image from "next/image";
import {
  faAngleDown,
  faMagnifyingGlass,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import MainRoute from "./menu";
import Logo from "../../assets/images/logo/logo.png";

const cx = classNames.bind(styles);

function Header() {
  const [search, setSearch] = useState("active_close");
  const [handleNav, sethandleNav] = useState("active_close");

  const handleSearchOpen = () => {
    setSearch("active_open");
  };

  const handleSearchClose = () => {
    setSearch("active_close");
  };

  const handleNavOpen = () => {
    sethandleNav("nav_open");
  };
  const handleNavClose = () => {
    sethandleNav("active_close");
  };

  return (
    <header className={cx("wrapper")}>
      <div className={cx("container")}>
        <Link href="/">
          <a>
            <Image src={Logo} alt="HiCas Logo" width={157} height={91} />
          </a>
        </Link>
        <div className={cx("menu")}>
          <div className={cx("nav_bar_res")}>
            <MainRoute />
          </div>
          <div className={cx("menu_action")}>
            {/* <div className={cx("search-wapper")}>
                <form action="" className={cx("search-form")}>
                  <input type="text" placeholder="Search" />
                  <button className={cx("btn_search")}>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ width: 20 }}
                    />
                  </button>
                </form>
              </div> */}
            <div className={cx("search-wapper", search)}>
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
              <button className={cx("close-btn")} onClick={handleSearchClose}>
                <FontAwesomeIcon icon={faXmark} style={{ width: 20 }} />
              </button>
            </div>
            <button className={cx("btn_search")} onClick={handleSearchOpen}>
              <FontAwesomeIcon icon={faMagnifyingGlass} style={{ width: 20 }} />
            </button>
            <div className={cx("header_line")}></div>
            <select name="" id="" className={cx("header_select")}>
              <option value="VI">VI</option>
              <option value="EN">EN</option>
            </select>
            <button className={cx("btn", "header_btn")}>Liên hệ</button>
          </div>
          <div className={cx("nav")} onClick={handleNavOpen}>
            <FontAwesomeIcon icon={faBars} style={{ width: 20 }} />
          </div>
          <div className={cx("nav_bar")}>
            <div className={cx("menu_nav_bar", handleNav)}>
              <button className={cx("close-btn")} onClick={handleNavClose}>
                <FontAwesomeIcon icon={faXmark} style={{ width: 20 }} />
              </button>
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
                <button className={cx("btn", "header_btn")}>Liên hệ</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
