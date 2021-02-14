import React from "react";
import PropTypes from "prop-types";

//Installed React-Icons from react-icons.github.io/react-icons
//With npm install react-icons --save
import { FaSortDown, FaSortUp } from "react-icons/fa";

import "./index.css";

export default function TableCell({
  name,
  sortOrder,
  sortColumn,
  handleClick,
}) {
  return (
    <th onClick={() => handleClick(name.toLowerCase())}>
      {name}
      {sortColumn && sortOrder === "desc" ? (
        <span className="tablecell-tr__span">
          <FaSortDown />
        </span>
      ) : (
        <span className="tablecell-tr__span">
          <FaSortUp />
        </span>
      )}
    </th>
  );
}

TableCell.propTypes = {
  name: PropTypes.string.isRequired,
  sortOrder: PropTypes.string.isRequired,
  sortColumn: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
