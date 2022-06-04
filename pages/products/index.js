import { Fragment } from "react";
import classNames from "classnames/bind";
import Image from "next/image";
import Link from "next/link";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import TitleSection from "../../src/components/titleSection";
import styles from "./products.module.scss";
const cx = classNames.bind(styles);

function Products() {
  return (
    <Fragment>
      <TitleSection>Sản phẩm tiêu biểu</TitleSection>
      <div className={cx("container")}>
        <div className={cx("wapper")}>
          <div className={cx("card")}>
            <div className={cx("img_wapper")}>
              <Image
                src="/images/cardProduct.jpg"
                alt="img"
                width="150px"
                height="150px"
                className={cx("img")}
              />
            </div>
            <div className={cx("card_content")}>
              <div className={cx("card_title")}>
                <h3>SmartMTO</h3>
                <div className={cx("link_card")}>
                  <Link href="/contact">
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className={cx("icon")}
                    />
                  </Link>
                </div>
              </div>
              <p>
                SmartMTO giúp giảm thời gian bóc tách bản vẽ dùng công nghệ trí
                tuệ nhân tạo AI, giúp tránh nhầm lẫn khi bóc tách bản vẽ và giúp
                thống kê chính xác quá trình bóc tách bản vẽ.
              </p>
            </div>
          </div>
          <div className={cx("card")}>
            <div className={cx("img_wapper")}>
              <Image
                src="/images/cardProduct.jpg"
                alt="img"
                width="150px"
                height="150px"
                className={cx("img")}
              />
            </div>
            <div className={cx("card_content")}>
              <div className={cx("card_title")}>
                <h3>SmartMTO</h3>
                <div className={cx("link_card")}>
                  <Link href="">
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className={cx("icon")}
                    />
                  </Link>
                </div>
              </div>
              <p>
                SmartMTO giúp giảm thời gian bóc tách bản vẽ dùng công nghệ trí
                tuệ nhân tạo AI, giúp tránh nhầm lẫn khi bóc tách bản vẽ và giúp
                thống kê chính xác quá trình bóc tách bản vẽ.
              </p>
            </div>
          </div>
          <div className={cx("card")}>
            <div className={cx("img_wapper")}>
              <Image
                src="/images/cardProduct.jpg"
                alt="img"
                width="150px"
                height="150px"
                className={cx("img")}
              />
            </div>
            <div className={cx("card_content")}>
              <div className={cx("card_title")}>
                <h3>SmartMTO</h3>
                <div className={cx("link_card")}>
                  <Link href="">
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className={cx("icon")}
                    />
                  </Link>
                </div>
              </div>
              <p>
                SmartMTO giúp giảm thời gian bóc tách bản vẽ dùng công nghệ trí
                tuệ nhân tạo AI, giúp tránh nhầm lẫn khi bóc tách bản vẽ và giúp
                thống kê chính xác quá trình bóc tách bản vẽ.
              </p>
            </div>
          </div>
          <div className={cx("card")}>
            <div className={cx("img_wapper")}>
              <Image
                src="/images/cardProduct.jpg"
                alt="img"
                width="150px"
                height="150px"
                className={cx("img")}
              />
            </div>
            <div className={cx("card_content")}>
              <div className={cx("card_title")}>
                <h3>SmartMTO</h3>
                <div className={cx("link_card")}>
                  <Link href="">
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className={cx("icon")}
                    />
                  </Link>
                </div>
              </div>
              <p>
                SmartMTO giúp giảm thời gian bóc tách bản vẽ dùng công nghệ trí
                tuệ nhân tạo AI, giúp tránh nhầm lẫn khi bóc tách bản vẽ và giúp
                thống kê chính xác quá trình bóc tách bản vẽ.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
