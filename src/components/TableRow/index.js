import React from "react";
import PropTypes from "prop-types";

import Flag from "../Flag";

export default function TableRow({
  flagUrl,
  countryName,
  language,
  population,
  region,
}) {
  return (
    <tr>
      <td>
        <Flag flag={flagUrl} />
      </td>
      <td>{countryName}</td>
      <td>
        {language.map((lang) => (
          <li key={lang.name}>{lang.name}</li>
        ))}
      </td>
      <td>{population}</td>
      <td>{region}</td>
    </tr>
  );
}

TableRow.propTypes = {
  flagUrl: PropTypes.string.isRequired,
  countryName: PropTypes.string.isRequired,
  languages: PropTypes.array.isRequired,
  population: PropTypes.number.isRequired,
  region: PropTypes.string.isRequired,
};
