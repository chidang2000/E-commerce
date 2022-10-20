import React, { useRef, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Logo-2.png";
import configs from "../../configs/routes";
import { BiCart } from "react-icons/bi";
import { TbUserCircle } from "react-icons/tb";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "../Header/Header.scss";
import { useSelector } from "react-redux";

import "./Header.scss";

import Search from "../Search/Search";

const Header = () => {
  const cartTotalQuantity = useSelector((state) => state.cartItems.value);

  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    setTotalProducts(
      cartTotalQuantity.reduce(
        (total, item) => total + Number(item.quantity),
        0
      )
    );
  }, [cartTotalQuantity]);
  const publicRoutes = [
    {
      path: configs.home,
      display: "Trang Chủ",
    },

    {
      path: configs.catalog,
      display: "Sản Phẩm",
    },

    {
      path: configs.contact,
      display: "Liên Hệ",
    },
  ];
  const headerRef = useRef();
  const menuLeftRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("shrink");
      } else {
        headerRef.current.classList.remove("shrink");
      }
    });
  }, []);

  const handleMenu = () => {
    menuLeftRef.current.classList.toggle("active");
  };

  // Search

  return (
    <div className="header" ref={headerRef}>
      <div className="container header__container">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt=""></img>
          </Link>
        </div>
        <div className="header__menu">
          <div className="header__menu__mobile">
            <AiOutlineMenu
              className="header__menu__mobile__open"
              onClick={handleMenu}
            />
          </div>
          <div className="header__menu__left" ref={menuLeftRef}>
            <AiOutlineClose
              className="header__menu__left__close"
              onClick={handleMenu}
            />
            {publicRoutes.map((item, i) => (
              <NavLink
                key={i}
                to={item.path}
                className="header__menu__left__item header__menu__item"
                onClick={handleMenu}
              >
                {item.display}
              </NavLink>
            ))}
          </div>

          <div className="header__menu__right">
            <div className="header__menu__right__item header__menu__item">
              <Search />
            </div>

            <div className="header__menu__right__item header__menu__item ">
              <Link to="/cart" className="cart">
                <BiCart />
                <p className="value-cart">{totalProducts}</p>
              </Link>
            </div>
            <div className="header__menu__right__item header__menu__item">
              <TbUserCircle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
