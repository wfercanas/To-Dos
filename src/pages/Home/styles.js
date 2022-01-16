import styled from 'styled-components';

const StyledHome = styled.div`
  max-width: 900px;
  margin: 32px auto;

  & nav {
    margin: 16px;
  }

  & h1 {
    margin: 0 16px;
  }

  & section:nth-of-type(1) {
    margin: 16px 0 16px 16px;
  }

  & > h2 {
    margin: 16px;
  }

  & > div:nth-of-type(1) {
    margin: 16px;
  }
`;

export { StyledHome };
