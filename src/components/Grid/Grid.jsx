import React from "react";
import PropTypes from "prop-types";

const Grid = ({ col, mdCol, smCol, gap, children }) => {
  const style = {
    gap: gap ? `${gap}px` : "0",
  };

  const gridCol = col ? `grid-col-${col}` : "";
  const gridMdCol = mdCol ? `grid-col-md-${mdCol}` : "";
  const gridSmCol = smCol ? `grid-col-sm-${smCol}` : "";
  return (
    <div className={`grid ${gridCol} ${gridMdCol} ${gridSmCol}`} style={style}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  col: PropTypes.number,
  mdCol: PropTypes.number,
  smCol: PropTypes.number,
  gap: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default Grid;
