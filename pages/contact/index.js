import { Fragment, useEffect, useState } from "react";
import classNames from "classnames/bind";
import ReactMarkdown from "react-markdown";

import BannerSlug from "../../src/components/bannerSlug";
import TitleSection from "../../src/components/titleSection";
import styles from "./contact.module.scss";
import Button from "../../src/components/button";

const cx = classNames.bind(styles);

function Contact() {
  const [address, setAddress] = useState([]);
  const API_URL = process.env.API_URL;
  useEffect(() => {
    fetch(`${API_URL}/companies`)
      .then((res) => res.json())
      .then((item) => {
        setAddress(item);
      });
  }, []);
  const position = { lat: 21.03074, lng: 105.78614 };
  return (
    <Fragment>
      <BannerSlug
        image="/images/bannerContact.png"
        title="CHÚNG TÔI LẮNG NGHE Ý KIẾN CỦA BẠN"
        slug="/contact"
        titleSlug="Liên hệ"
      />
      <TitleSection>Liên hệ với chúng tôi</TitleSection>
      <div className={cx("container")}>
        <div className={cx("contact_wapper")}>
          <div className={cx("contact_col")}>
            <div className={cx("address")}>
              <h3>CÔNG TY TNHH PHẦN MỀM HICAS</h3>
              {address.map((value) => (
                <div className={cx("address_item")} key={value.id}>
                  <b>{value.Name}</b>
                  {value.addresses.map((item) => (
                    <ReactMarkdown key={item.id}>{item.Address}</ReactMarkdown>
                  ))}
                  <div className={cx("line")}></div>
                </div>
              ))}
            </div>
            <div className={cx("contact")}>
              <h3>YÊU CẦU HỖ TRỢ TỪ HICAS</h3>
              <form action="" className={cx("form")}>
                <input type="text" placeholder="Họ tên" />
                <div className={cx("form_inline")}>
                  <input type="text" placeholder="Điện thoại" />
                  <input type="Email" placeholder="Email" />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Nội dung"
                ></textarea>
              </form>
              <Button mainBtn="true" width="100%" borderRadius="10px">
                Gửi thông tin
              </Button>
            </div>
          </div>
          <div className={cx("contact_col")}>
            <div className={cx("map")}>
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                marginHeight="0"
                marginWidth="0"
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=T%C3%B2a%20Technosoft,%208%20P.%20Duy%20T%C3%A2n,%20D%E1%BB%8Bch%20V%E1%BB%8Dng%20H%E1%BA%ADu,%20C%E1%BA%A7u%20Gi%E1%BA%A5y,%20H%C3%A0%20N%E1%BB%99i%2010000,%20Vi%E1%BB%87t%20Nam+(My%20Business%20Name)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      ;
    </Fragment>
  );
}

export default Contact;
