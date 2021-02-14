import React, { useState } from "react";
import "./App.css";

import CountryTable from "./components/CountryTable";
import Search from "./components/Search";
import useCountries from "./hooks";

function App() {
  const [sortColumn, setSortColumn] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");
  const [keyword, setKeyword] = useState("");
  const [error, countries] = useCountries(keyword, sortOrder, sortColumn);

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleClick = (colName) => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    setSortColumn(colName);
    //setSortColumn(e.target.innerText.toLowerCase());
  };

  return (
    <div className="App">
      <Search keyword={keyword} handleChange={handleChange} />
      <CountryTable
        countries={countries}
        handleClick={handleClick}
        sortOrder={sortOrder}
        sortColumn={sortColumn}
      />
    </div>
  );
}

export default App;
