import React, { useEffect, useState } from "react";
import "./Cart.scss";
import { useSelector } from "react-redux";
import productData from "../../assets/fake-data/products";
import Button from "../../components/Button";
import Helmet from "../../components/Helmet";
import { Link } from "react-router-dom";
import numberCommas from "../../utils/numberCommas";
import CartItem from "../../components/CartItem/CartItem";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems.value);

  const [cartProducts, setCartProducts] = useState(
    productData.getCartItemsDetail(cartItems)
  );

  const [totalProducts, setTotalProducts] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartProducts(productData.getCartItemsDetail(cartItems));

    setTotalPrice(
      cartItems.reduce(
        (total, item) => total + Number(item.quantity * Number(item.price)),
        0
      )
    );

    setTotalProducts(
      cartItems.reduce((total, item) => total + Number(item.quantity), 0)
    );
  }, [cartItems]);

  return (
    <Helmet title="Giỏ Hàng">
      <div className="cart">
        <div className="cart__info">
          <div className="cart__info__txt">
            <p>Bạn đang có {totalProducts} sản phẩm trong giỏ hàng</p>
            <div className="cart__info__txt__price">
              <span>Thành tiền:</span>
              <span>{numberCommas(Number(totalPrice))}</span>
            </div>
          </div>
          <div className="cart__info__btn">
            <Button backgroundColor={"blue"} size={"block"}>
              Đặt hàng
            </Button>
            <Link to="/catalog">
              <Button backgroundColor={"blue"} size={"block"}>
                Tiếp tục mua hàng
              </Button>
            </Link>
          </div>
        </div>
        <div className="cart__list">
          {cartProducts.map((item, index) => (
            <CartItem item={item} key={index} />
          ))}
        </div>
      </div>
    </Helmet>
  );
};

export default Cart;
