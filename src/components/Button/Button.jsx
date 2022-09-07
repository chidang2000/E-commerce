import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

const Button = ({
  backgroundColor,
  size,
  animated,
  icon,
  onClick,
  children,
}) => {
  const bg = backgroundColor ? "bg-" + backgroundColor : "bg-main";
  const sizebtn = size ? "btn-" + size : "";
  const animate = animated ? "btn-animated" : "";
  return (
    <button
      className={`btn ${bg} ${sizebtn} ${animate}`}
      onClick={onClick ? () => onClick() : null}
    >
      <span className="btn__txt">{children}</span>
      {icon ? <span className="btn__icon">{icon}</span> : null}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
  size: PropTypes.string,
  animated: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
