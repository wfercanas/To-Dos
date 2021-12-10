import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledOptions = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  gap: 1rem;
`;

const StyledIcon = styled.i`
  cursor: pointer;
  transition: color 500ms ease-out;
  color: var(--n100);
  font-size: 1.3rem;

  :hover {
    color: var(--n400a);
  }
`;

export { StyledNavbar, StyledIcon, StyledOptions };
