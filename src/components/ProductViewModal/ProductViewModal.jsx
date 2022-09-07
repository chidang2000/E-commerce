import React, { useEffect, useState } from "react";
import "./ProductViewModal.scss";
import productData from "../../assets/fake-data/products";
import Button from "../Button";
import ProductView from "../ProductView/ProductView";
import { useSelector, useDispatch } from "react-redux";
import { close } from "../../redux/productModal/productModalSlice";
const ProductViewModal = () => {
  const productSlug = useSelector((state) => state.productModal.value);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(undefined);
  useEffect(() => {
    setProduct(productData.getProductBySlug(productSlug));
  }, [productSlug]);
  return (
    <div
      className={`product-view__modal ${product === undefined ? "" : "active"}`}
    >
      <div className="product-view__modal__content">
        <ProductView product={product} />
        <div className="product-view__modal__content__close">
          <Button
            backgroundColor={"blue"}
            onClick={() => dispatch(close(productSlug))}
          >
            đóng
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewModal;
