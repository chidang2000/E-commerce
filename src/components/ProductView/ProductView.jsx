import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./ProductView.scss";
import Button from "../Button";
import numberCommas from "../../utils/numberCommas";
import { GrSubtract } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/shopping-cart/cartItemsSlice";
import { close } from "../../redux/productModal/productModalSlice";

const ProductView = ({ product }) => {
  const dispatch = useDispatch();
  let productView = product;

  if (productView === undefined) {
    product = {
      price: 0,
      title: "",
      colors: [],
      size: [],
      image01: null,
      image02: null,
      categorySlug: "",
      description: "",
    };
  }
  const [previewImg, setPreviewImg] = useState(product.image01);
  useEffect(() => {
    setPreviewImg(product.image01);
    setQuantity(1);
    setColor(undefined);
    setSize(undefined);
  }, [product]);

  const [descExpand, setDescExpand] = useState(false);

  const [color, setColor] = useState(undefined);
  const [size, setSize] = useState(undefined);

  const [quantity, setQuantity] = useState(1);

  const goCart = useNavigate();

  const check = () => {
    if (color === undefined) {
      alert("Vui Lòng Chọn Màu");
      return false;
    }

    if (size === undefined) {
      alert("Vui Lòng Chọn Size");
      return false;
    }

    return true;
  };

  const addToCart = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );
      dispatch(close(product));
      alert("Thêm Thành Công !");
    }
  };

  const buyNow = () => {
    if (check()) {
      dispatch(
        addItem({
          slug: product.slug,
          color: color,
          size: size,
          quantity: quantity,
          price: product.price,
        })
      );
      goCart("/cart");
      dispatch(close(product));
    }
  };
  return (
    <div className="product-view">
      <div className="product-view__left">
        <div className="product-view__left__images">
          <div className="product-view__left__images__list">
            <div
              className="product-view__left__images__list__item"
              onClick={() => setPreviewImg(product.image01)}
            >
              <img src={product.image01} alt="" />
            </div>
            <div
              className="product-view__left__images__list__item"
              onClick={() => setPreviewImg(product.image02)}
            >
              <img src={product.image02} alt="" />
            </div>
          </div>
          <div className="product-view__left__images__main">
            <img src={previewImg} alt="" />
          </div>
        </div>

        <div
          className={`product-view__left__desc ${descExpand ? "expand" : ""}`}
        >
          <h2 className="product-view__left__desc__title">Chi Tiết Sản Phẩm</h2>
          <div
            className="product-view__left__desc__content"
            dangerouslySetInnerHTML={{ __html: product.description }}
          ></div>
          <div className="product-view__left__desc__toggle">
            <Button
              backgroundColor={"blue"}
              onClick={() => setDescExpand(!descExpand)}
            >
              {descExpand ? "Thu Gọn" : "Xem Thêm"}
            </Button>
          </div>
        </div>
      </div>
      <div className="product-view__right">
        <h1 className="product-view__right__title">{product.title}</h1>

        <div className="product-view__right__item">
          <span className="product-view__right__item__price">
            {numberCommas(product.price)} VND
          </span>
        </div>

        <div className="product-view__right__item">
          <span className="product-view__right__item__title">Màu Sắc</span>
          <div className="product-view__right__item__list">
            {product.colors.map((item, i) => (
              <div
                key={i}
                className={`product-view__right__item__list__item ${
                  color === item ? "active" : ""
                }`}
                onClick={() => setColor(item)}
              >
                <div className={`circle bg-${item}`}></div>
              </div>
            ))}
          </div>
        </div>

        <div className="product-view__right__item">
          <span className="product-view__right__item__title">Kích Thước</span>
          <div className="product-view__right__item__list">
            {product.size.map((item, i) => (
              <div
                key={i}
                className={`product-view__right__item__list__item ${
                  size === item ? "active" : ""
                }`}
                onClick={() => setSize(item)}
              >
                <span className="product-view__right__item__list__item__size">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="product-view__right__item">
          <span className="product-view__right__item__title">Số Lượng</span>
          <div className="product-view__right__item__quantity">
            <div
              className="product-view__right__item__quantity__btn"
              onClick={() => setQuantity(quantity - 1 < 1 ? 1 : quantity - 1)}
            >
              <GrSubtract />
            </div>
            <div className="product-view__right__item__quantity__input">
              {quantity}
            </div>
            <div
              className="product-view__right__item__quantity__btn"
              onClick={() => setQuantity(quantity + 1)}
            >
              <AiOutlinePlus />
            </div>
          </div>
        </div>

        <div className="product-view__right__item">
          <Button backgroundColor={"blue"} onClick={addToCart}>
            Add To Cart
          </Button>

          <Button backgroundColor={"blue"} onClick={buyNow}>
            Mua Ngay
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductView.propTypes = {
  product: PropTypes.object,
};

export default ProductView;
