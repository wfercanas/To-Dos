import styled, { keyframes } from "styled-components";

const StyledTaskCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--n10);
  border-radius: 1rem;
  border: 1px solid var(--n40);
  box-shadow: 1px 1px 1px 1px var(--n40);
`;

const StyledTaskDescription = styled.div`
  display: flex;
  align-items: center;
`;

const StyledCheck = styled.i`
  font-size: 1.2rem;
  margin-right: 1rem;
  color: ${(props) => (props.completed ? "var(--g200)" : "var(--n100)")};
  cursor: pointer;
  transition: transform 100ms ease-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledTaskTitle = styled.p`
  margin: 0;
  text-decoration: ${(props) => (props.completed ? "line-through" : "initial")};
`;

const StyledDelete = styled.i`
  font-size: 1.2rem;
  color: var(--n100);
  cursor: pointer;

  &:hover,
  &:focus {
    color: var(--r400);
  }
`;

const loading = keyframes`
  0% {
    background-color: var(--n10);
  }
  50% {
    background-color: var(--n40);
  }
  100% {
    background-color: var(--n10);
  }
`;

const StyledLoadingTaskCard = styled(StyledTaskCard)`
  transition: background-color 1s ease;
  animation: ${loading} 3s ease-in infinite;
`;

export {
  StyledTaskCard,
  StyledTaskDescription,
  StyledCheck,
  StyledTaskTitle,
  StyledDelete,
  StyledLoadingTaskCard,
};
