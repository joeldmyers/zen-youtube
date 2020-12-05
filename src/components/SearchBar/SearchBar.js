import React, { useState } from "react";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("Search videos...");

  const onInputChange = (term) => {
    setSearchTerm(term);
    props.onSearchTermChange(term);
  };

  const onClickSearchBar = (searchTerm) => {
    if (searchTerm === "Search videos...") {
      setSearchTerm("");
    }
  };

  const onBlurSearchBar = (searchTerm) => {
    if (searchTerm === "") {
      setSearchTerm("");
    }
  };

  return (
    <div className="search-bar">
      <input
        value={searchTerm}
        onFocus={() => onClickSearchBar(searchTerm)}
        onBlur={() => onBlurSearchBar(searchTerm)}
        onChange={(event) => onInputChange(event.target.value)}
      />
    </div>
  );
};

export default SearchBar;
