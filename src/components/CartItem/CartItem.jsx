import React, { useEffect, useState } from "react";
import "./CartItem.scss";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import numberCommas from "../../utils/numberCommas";
import { GrSubtract } from "react-icons/gr";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  updateItem,
  removeItem,
} from "../../redux/shopping-cart/cartItemsSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [itemCart, setItemCart] = useState(item);
  const [quantity, setQuantity] = useState(item.quantity);
  useEffect(() => {
    setItemCart(item);
    setQuantity(item.quantity);
  }, [item]);

  const updateQuantity = (actions) => {
    if (actions === "+") {
      dispatch(updateItem({ ...item, quantity: quantity + 1 }));
      setItemCart(item);
      setQuantity(item.quantity);
    }
    if (actions === "-") {
      dispatch(
        updateItem({ ...item, quantity: quantity - 1 === 0 ? 1 : quantity - 1 })
      );
    }
  };

  const delItem = () => {
    dispatch(removeItem(itemCart));
  };
  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={item.product.image01} alt="" />
      </div>
      <div className="cart-item__info">
        <div className="cart-item__info__name">
          <Link to={`/catalog/${item.slug}`}>
            {`${item.product.title} - ${item.color} - ${item.size}`}
          </Link>
        </div>
        <div className="cart-item__info__price">
          {numberCommas(item.product.price)}
        </div>
        <div className="cart-item__info__quantity">
          <div
            className="cart-item__info__quantity__btn"
            onClick={() => updateQuantity("-")}
          >
            <GrSubtract />
          </div>
          <div className="cart-item__info__quantity__input">{quantity}</div>
          <div
            className="cart-item__info__quantity__btn"
            onClick={() => updateQuantity("+")}
          >
            <AiOutlinePlus />
          </div>
        </div>

        {/* Icon Delete */}
        <RiDeleteBinLine className="cart-item__info__del" onClick={delItem} />
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object,
};

export default CartItem;
