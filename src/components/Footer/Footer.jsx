import React from "react";
import Grid from "../Grid";
import { Link } from "react-router-dom";
import logo from "../../assets/images/Logo-2.png";
import "./Footer.scss";

const footerAboutLinks = [
  {
    display: "Giới Thiệu",
    path: "/about",
  },
  {
    display: "Liên Hệ",
    path: "/about",
  },
  {
    display: "Tuyển Dụng",
    path: "/about",
  },
  {
    display: "Tin Tức",
    path: "/about",
  },
];

const footerCustomerLinks = [
  {
    display: "Chính Sách Đổi Trả",
    path: "/about",
  },
  {
    display: "Chính Sách Bảo Hành",
    path: "/about",
  },
  {
    display: "Chính Sách Hoàn Tiền",
    path: "/about",
  },
];
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <Grid col={4} mdCol={2} smCol={1} gap={10}>
          <div>
            <div className="footer__title">Tổng đài hổ trợ</div>
            <div className="footer__content">
              <p className="footer__item"> Liên hệ đặt hàng: 0825629645</p>
              <p className="footer__item"> Thắc mắc đặt hàng: 0825629645</p>
              <p className="footer__item"> Góp ý: 0825629645</p>
            </div>
          </div>

          <div>
            <div className="footer__title">Về YOLO</div>
            <div className="footer__content">
              {footerAboutLinks.map((item, i) => (
                <p className="footer__item" key={i}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>

          <div>
            <div className="footer__title">Chăm sóc khách hàng</div>
            <div className="footer__content">
              {footerCustomerLinks.map((item, i) => (
                <p className="footer__item" key={i}>
                  <Link to={item.path}>{item.display}</Link>
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="footer__title">
              <Link to="/">
                <img src={logo} alt="" className="footer__logo" />
              </Link>
            </p>
            <div className="footer__content">
              <p className="footer__item">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </p>
            </div>
          </div>
        </Grid>
      </div>
    </footer>
  );
};

export default Footer;
