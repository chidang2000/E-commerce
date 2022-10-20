import Tippy from "@tippyjs/react/headless";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import productData from "../../assets/fake-data/products";
import { searchItem } from "../../redux/search/searchSlice";
// import { useDebounce } from "../hooks";
import "./Search.scss";
import { Link } from "react-router-dom";
const Search = () => {
  const inputRef = useRef();
  const allProduct = productData.getAllProducts();
  const [searchValue, setSearchValue] = useState("");
  // const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  // const debouncedValue = useDebounce(searchValue, 200);
  // const productItem = productData.getProductByName(debouncedValue);
  const a = useSelector((state) => state.search.search);
  console.log(a);

  const dispatch = useDispatch();

  const handleInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
      setShowResult(true);
      dispatch(searchItem(searchValue));
    }

    if (searchValue.length <= 0) {
      setShowResult(false);
    }
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  const searchResult = useSelector((state) => {
    const result = allProduct.filter((item) => {
      return item.title.toLocaleLowerCase().includes(state.search.search);
    });
    return result;
  });

  const handleClickItemSearch = () => {
    setShowResult(false);
  };

  return (
    <Tippy
      appendTo={() => document.body}
      interactive
      placement="bottom"
      visible={showResult && searchResult.length > 0}
      onClickOutside={handleHideResult}
      render={(attrs) => (
        <div className="search-result" tabIndex="-1" {...attrs}>
          <div>
            {/* <h4 className="search-title">Account</h4> */}
            {searchResult.map((result, index) => (
              <Link
                to={`/catalog/${result.slug}`}
                onClick={handleClickItemSearch}
              >
                <div key={index} className="search-result__info">
                  <div className="search-result__info__image">
                    <img src={result.image01} alt="" />
                  </div>
                  <h3 className="search-result__info__name">{result.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    >
      <div>
        <input
          ref={inputRef}
          value={searchValue}
          spellCheck={false}
          onChange={handleInput}
          // onFocus={() => setShowResult(true)}
          type="text"
          placeholder="Enter item..."
          className="header__menu__right__item__input"
        />
        {/* <BiSearch /> */}
      </div>
    </Tippy>
  );
};

export default Search;
