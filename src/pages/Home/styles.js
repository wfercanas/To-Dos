import styled from "styled-components";

const StyledHome = styled.div`
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

const StyledTasksContainer = styled.div`
  margin: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export { StyledHome, StyledTasksContainer };