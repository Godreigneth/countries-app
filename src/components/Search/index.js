import React from "react";
import PropTypes from "prop-types";

import "./index.css";

export default function Search({ keyword, handleChange }) {
  return (
    <input
      className=""
      type="text"
      name="search"
      placeholder="Search Countries by name...."
      value={keyword}
      onChange={handleChange}
    />
  );
}

Search.propTypes = {
  keyword: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
