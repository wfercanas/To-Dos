import React from 'react';
import { StyledSearch, StyledSearchInput, StyledIcon } from './styles';

function Search({ searchValue, setSearchValue }) {
  const handleChange = ({ target }) => {
    setSearchValue(target.value);
  };

  return (
    <StyledSearch>
      <StyledSearchInput
        value={searchValue}
        placeholder='Search'
        onChange={handleChange}
      />
      <StyledIcon className='ci-search' />
    </StyledSearch>
  );
}

function EmptySearchMessage({ searchText }) {
  return <p>No se encontraron resultados para '{searchText}'</p>;
}

export { Search, EmptySearchMessage };
