import React, { useCallback, useEffect, useRef, useState } from "react";
import "./Catalog.scss";
import Helmet from "../../components/Helmet";
import CheckBox from "../../components/CheckBox/CheckBox";
import productData from "../../assets/fake-data/products";
import category from "../../assets/fake-data/category";
import colors from "../../assets/fake-data/product-colors";
import size from "../../assets/fake-data/product-size";
import Infinity from "../../components/Infinity";
import Button from "../../components/Button";
import { AiOutlineClose } from "react-icons/ai";

const Catalog = () => {
  const initFilter = {
    category: [],
    colors: [],
    size: [],
  };
  const productList = productData.getAllProducts();

  const [products, setProducts] = useState(productList);

  const [filter, setFilter] = useState(initFilter);

  const filterSelect = (type, checked, item) => {
    if (checked) {
      switch (type) {
        case "CATEGORY":
          setFilter({
            ...filter,
            category: [...filter.category, item.catagorySlug],
          });
          break;
        case "COLOR":
          setFilter({
            ...filter,
            colors: [...filter.colors, item.color],
          });
          break;
        case "SIZE":
          setFilter({
            ...filter,
            size: [...filter.size, item.size], // (item.size lấy từ FAKE API)
          });
          break;
        default:
          throw new Error("Loi~ !!");
      }
    } else {
      switch (type) {
        case "CATEGORY":
          const newCategory = filter.category.filter(
            (e) => e !== item.catagorySlug
          );
          setFilter({ ...filter, category: newCategory });
          break;
        case "COLOR":
          const newColors = filter.colors.filter((e) => e !== item.color);
          setFilter({ ...filter, colors: newColors });
          break;
        case "SIZE":
          const newSize = filter.size.filter((e) => e !== item.size);
          setFilter({ ...filter, size: newSize });
          break;
        default:
          throw new Error("Loi~ !!");
      }
    }
  };

  const updateProduct = useCallback(() => {
    let temp = productList;

    if (filter.category.length > 0) {
      temp = temp.filter((e) => filter.category.includes(e.categorySlug)); //categorySlug trong product,js trong FAKE API
    }
    if (filter.colors.length > 0) {
      temp = temp.filter((e) => {
        const check = e.colors.find((color) => filter.colors.includes(color));
        return check !== undefined;
      });
    }
    if (filter.size.length > 0) {
      temp = temp.filter((e) => {
        const check = e.size.find((size) => filter.size.includes(size));
        return check !== undefined;
      });
    }
    setProducts(temp);
  }, [filter, productList]);

  useEffect(() => {
    updateProduct();
  }, [updateProduct]);

  const clearFilter = () => {
    setFilter(initFilter);
  };

  const filterRef = useRef();

  const handleFilter = () => filterRef.current.classList.toggle("active");

  return (
    <Helmet title="Sản phẩm">
      <div className="catalog">
        <div className="catalog__watchfilter">
          <Button backgroundColor={"blue"} onClick={handleFilter}>
            Xem Bộ Lọc
          </Button>
        </div>
        <div className="catalog__filter" ref={filterRef}>
          <div className="catalog__filter__close" onClick={handleFilter}>
            <AiOutlineClose />
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">
              Danh mục sản phẩm
            </div>
            <div className="catalog__filter__widget__content">
              {category.map((item, i) => (
                <div key={i} className="catalog__filter__widget__content__item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("CATEGORY", input.checked, item)
                    }
                    checked={filter.category.includes(item.catagorySlug)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Màu Sắc</div>
            <div className="catalog__filter__widget__content">
              {colors.map((item, i) => (
                <div key={i} className="catalog__filter__widget__content__item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("COLOR", input.checked, item)
                    }
                    checked={filter.colors.includes(item.color)}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="catalog__filter__widget">
            <div className="catalog__filter__widget__title">Màu Sắc</div>
            <div className="catalog__filter__widget__content">
              {size.map((item, i) => (
                <div key={i} className="catalog__filter__widget__content__item">
                  <CheckBox
                    label={item.display}
                    onChange={(input) =>
                      filterSelect("SIZE", input.checked, item)
                    }
                    checked={filter.size.includes(item.size)}
                  />
                </div>
              ))}
            </div>
          </div>

          <Button backgroundColor={"blue"} onClick={clearFilter}>
            Xóa bộ lọc
          </Button>
        </div>

        <div className="catalog__content">
          <Infinity data={products} />
        </div>
      </div>
    </Helmet>
  );
};

export default Catalog;
