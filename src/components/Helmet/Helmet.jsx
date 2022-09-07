import PropTypes from "prop-types";
import { useEffect } from "react";

const Helmet = ({ title, children }) => {
  document.title = `Yolo - ${title}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <div>{children}</div>;
};

Helmet.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Helmet;
