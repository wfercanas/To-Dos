import styled from 'styled-components';

const StyledSearch = styled.div`
  padding: 0.2rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--n10);
  border-radius: 1rem;
  border: 1px solid var(--n40);
`;

const StyledSearchInput = styled.input`
  width: 100%;
  border: none;
  background-color: inherit;

  &:focus {
    outline: none;
  }
`;

const StyledIcon = styled.i`
  color: var(--n200);
`;

export { StyledSearch, StyledSearchInput, StyledIcon };
