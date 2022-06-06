import { Fragment, useEffect, useState } from "react";
import classNames from "classnames/bind";
import ReactMarkdown from "react-markdown";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import BannerSlug from "../../src/components/bannerSlug";
import TitleSection from "../../src/components/titleSection";
import styles from "./contact.module.scss";

const cx = classNames.bind(styles);

function Contact() {
  const [address, setAddress] = useState([]);
  const API_URL = process.env.API_URL;

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/companies`)
      .then((res) => res.json())
      .then((item) => {
        setAddress(item);
      });
  }, []);

  async function addMessage() {
    const messageInfo = {
      Name: name,
      Phone: phone,
      Email: email,
      Content: content,
    };

    const add = await fetch(`${API_URL}/support-messages`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(messageInfo),
    });

    await add.json();

    if (add.status === 200) {
      alert("Gửi yêu cầu hổ trợ thành công");
      setName("");
      setPhone("");
      setEmail("");
      setContent("");
    } else {
      alert("Gửi yêu hổ trợ không thành công");
    }
  }

  return (
    <Fragment>
      <BannerSlug
        image="/images/bannerContact.png"
        title="CHÚNG TÔI LẮNG NGHE Ý KIẾN CỦA BẠN"
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
                <input
                  type="text"
                  placeholder="Họ tên"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
                <div className={cx("form_inline")}>
                  <input
                    type="text"
                    placeholder="Điện thoại"
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                  />
                  <input
                    type="Email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                </div>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Nội dung"
                  onChange={(e) => setContent(e.target.value)}
                  value={content}
                ></textarea>
                <button type="button" onClick={() => addMessage()}>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ width: 6, marginRight: 10 }}
                  />
                  Gửi thông tin
                </button>
              </form>
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
