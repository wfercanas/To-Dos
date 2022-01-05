import styled from "styled-components";

const StyledAddTaskButton = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--b200);
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 1px 1px 5px 5px var(--n40);
`;

const StyledIcon = styled.i`
  font-size: 1.5rem;
  color: var(--n10);
  transition: transform 500ms ease-out;

  &:hover {
    transform: rotate(180deg);
  }
`;

export { StyledAddTaskButton, StyledIcon };
