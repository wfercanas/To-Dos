import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const StyledIcon = styled.i`
  cursor: pointer;
  transition: color 500ms ease-out;
  color: ${({ updates }) => (!updates ? 'var(--n100)' : 'var(--r400)')};
  font-size: 1.3rem;

  :hover {
    opacity: 80%;
  }
`;

export { StyledNavbar, StyledIcon };
