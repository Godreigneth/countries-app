import React from "react";
import PropTypes from "prop-types";

import "./index.css";
import TableCell from "../TableCell";

export default function TableHeader({ handleClick, sortOrder, sortColumn }) {
  const sortNames = ["Flag", "Name", "Language", "Population", "Region"];
  return (
    <thead>
      <tr>
        {sortNames.map((col, index) => (
          <TableCell
            key={index}
            name={col}
            sortOrder={sortOrder}
            sortColumn={col.toLowerCase() === sortColumn}
            handleClick={handleClick}
          />
        ))}
      </tr>
    </thead>
  );
}

TableHeader.propType = {
  handleClick: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  sortColumn: PropTypes.string.isRequired,
};
