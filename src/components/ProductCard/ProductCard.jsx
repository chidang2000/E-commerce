import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import { BiCart } from "react-icons/bi";
import "./ProductCard.scss";
import numberCommas from "../../utils/numberCommas";
import { useDispatch } from "react-redux";
import { open } from "../../redux/productModal/productModalSlice";

const ProductCard = ({ img01, img02, name, price, slug }) => {
  const dispatch = useDispatch();
  return (
    <div className="product-card">
      <Link to={`/catalog/${slug}`}>
        <div className="product-card__images">
          <img src={img01} alt={slug} />
          <img src={img02} alt={slug} />
        </div>
        <h3 className="product-card__name">{name}</h3>
        <div className="product-card__price">
          {numberCommas(price)} VND
          <span className="product-card__price-old">
            <del>{numberCommas(399000)} VND</del>
          </span>
        </div>
      </Link>
      <div className="product-card__btn">
        <Button
          icon={<BiCart />}
          animated={true}
          backgroundColor="blue"
          onClick={() => dispatch(open(slug))}
        >
          Chọn Mua
        </Button>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  img01: PropTypes.string.isRequired,
  img02: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number,
  slug: PropTypes.string,
};

export default ProductCard;
