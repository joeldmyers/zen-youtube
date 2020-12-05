import React, { useState, FunctionComponent } from "react";

interface IProps {
  onSearchTermChange: (term: string) => void;
}

const SearchBar: FunctionComponent<IProps> = (props: IProps) => {
  const [searchTerm, setSearchTerm] = useState("Search videos...");

  const onInputChange = (term: string) => {
    setSearchTerm(term);
    props.onSearchTermChange(term);
  };

  const onClickSearchBar = (searchTerm: string) => {
    if (searchTerm === "Search videos...") {
      setSearchTerm("");
    }
  };

  const onBlurSearchBar = (searchTerm: string) => {
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
