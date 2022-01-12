import styled from "styled-components";

const StyledModal = styled.div`
  position: relative;
  top: 35%;
  left: calc(50% - 200px);
  background-color: var(--n10);
  padding: 16px;
  max-width: 400px;
  border-radius: 16px;

  & div {
    margin: 8px auto;
  }
`;

const StyledTitle = styled.p`
  font-size: 24px;
  margin: 0 0 16px;
`;

const StyledButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
`;

export { StyledModal, StyledTitle, StyledButtonsContainer };
