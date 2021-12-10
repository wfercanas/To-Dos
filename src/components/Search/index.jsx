import React from 'react';
import { StyledSearch, StyledSearchInput, StyledIcon } from './styles';

function Search() {
  return (
    <StyledSearch>
      <StyledSearchInput />
      <StyledIcon className='ci-search' />
    </StyledSearch>
  );
}

export { Search };
