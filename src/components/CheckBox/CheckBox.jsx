import React, { useRef } from "react";
import PropTypes from "prop-types";
import { AiOutlineCheck } from "react-icons/ai";
import "./CheckBox.scss";
const CheckBox = ({ label, checked, onChange }) => {
  const inputRef = useRef();
  const onChangeInput = () => {
    if (onChange) {
      onChange(inputRef.current);
    }
  };
  return (
    <label className="custom-checkbox">
      <input
        className="custom-checkbox__input"
        type="checkbox"
        onChange={onChangeInput}
        checked={checked}
        ref={inputRef}
      />
      <span className="custom-checkbox__checkmark">
        <AiOutlineCheck className="custom-checkbox__icon" />
      </span>
      {label}
    </label>
  );
};

CheckBox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

export default CheckBox;
