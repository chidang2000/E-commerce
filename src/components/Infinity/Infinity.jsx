import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import Grid from "../Grid";
import ProductCard from "../ProductCard/ProductCard";

// eslint-disable-next-line no-shadow-restricted-names
const Infinity = ({ data }) => {
  const perLoad = 6;

  const listRef = useRef();

  const [listData, setListData] = useState([]);

  const [load, setLoad] = useState(true);

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setListData(data.slice(0, perLoad));
    setIndex(1);
  }, [data]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (listRef && listRef.current) {
        if (
          window.scrollY + window.innerHeight >=
          listRef.current.clientHeight + listRef.current.offsetTop + 200
        ) {
          setLoad(true);
        }
      }
    });
  }, [listRef]);

  useEffect(() => {
    const getItems = () => {
      const pages = Math.floor(data.length / perLoad);
      const maxIndex = data.length % perLoad === 0 ? pages : pages + 1;

      if (load && index <= maxIndex) {
        const start = perLoad * index;
        const end = start + perLoad;

        setListData(listData.concat(data.slice(start, end)));
        setIndex(index + 1);
      }
    };
    getItems();
    setLoad(false);
  }, [load, index, listData, data]);
  return (
    <div ref={listRef}>
      <Grid col={3} mdCol={2} smCol={1} gap={20}>
        {listData.map((item, i) => (
          <ProductCard
            key={i}
            img01={item.image01}
            img02={item.image02}
            name={item.title}
            price={item.price}
            slug={item.slug}
          />
        ))}
      </Grid>
    </div>
  );
};

Infinity.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Infinity;
