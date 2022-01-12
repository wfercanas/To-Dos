import React, { useContext } from "react";
import { AppContext } from "../../context";
import { StyledSearch, StyledSearchInput, StyledIcon } from "./styles";

function Search() {
  const { searchValue, setSearchValue } = useContext(AppContext);

  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <StyledSearch>
      <StyledSearchInput
        value={searchValue}
        placeholder="Search"
        onChange={handleChange}
      />
      <StyledIcon className="ci-search" />
    </StyledSearch>
  );
}

export { Search };
