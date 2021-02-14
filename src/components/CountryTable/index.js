import React from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import TableHeader from "../TableHeader";
import TableRow from "../TableRow";

import "./index.css";

export default function CountryTable({
  countries,
  handleClick,
  sortOrder,
  sortColumn,
}) {
  return (
    <Table responsive striped bordered hover variant="dark">
      <TableHeader
        className="table-header"
        handleClick={handleClick}
        sortOrder={sortOrder}
        sortColumn={sortColumn}
      />
      <tbody className="table-body">
        {countries.map((country) => (
          <TableRow
            key={country.name}
            flagUrl={country.flag}
            countryName={country.name}
            language={country.languages}
            population={country.population}
            region={country.region}
          />
        ))}
      </tbody>
    </Table>
  );
}

CountryTable.propTypes = {
  countries: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
  sortOrder: PropTypes.string.isRequired,
  sortColumn: PropTypes.string.isRequired,
};
