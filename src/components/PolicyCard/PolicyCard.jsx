import React from "react";
import PropTypes from "prop-types";
import "./PolicyCard.scss";

const PolicyCard = ({ name, desc, icon }) => {
  return (
    <div className="policy-card">
      <div className="policy-card__icon">{icon}</div>
      <div className="policy-card__info">
        <p className="policy-card__name">{name}</p>
        <span className="policy-card__desc">{desc}</span>
      </div>
    </div>
  );
};

PolicyCard.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
};

export default PolicyCard;
