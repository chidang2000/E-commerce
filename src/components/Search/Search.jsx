import Tippy from "@tippyjs/react/headless";
import React, { useEffect, useRef, useState } from "react";
import { BiSearch } from "react-icons/bi";
import productData from "../../assets/fake-data/products";
import { useDebounce } from "../hooks";
import "./Search.scss";
const Search = () => {
  const inputRef = useRef();
  const allProduct = productData.getAllProducts();
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const debouncedValue = useDebounce(searchValue, 200);
  const productItem = productData.getProductByName(debouncedValue);

  const handleInput = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  const handleHideResult = () => {
    setShowResult(false);
  };

  useEffect(() => {
    if (!productItem) {
      return;
    }
    setSearchResult(allProduct);
  }, []);

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
              <div key={index} className="search-result__info">
                <div className="search-result__info__image">
                  <img src={result.image01} alt="" />
                </div>
                <h3 className="search-result__info__name">{result.title}</h3>
              </div>
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
          onFocus={() => setShowResult(true)}
          type="text"
          placeholder="Enter item..."
          className="header__menu__right__item__input"
        />
        <BiSearch />
      </div>
    </Tippy>
  );
};

export default Search;
