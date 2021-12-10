import styled from 'styled-components';

const StyledTaskCard = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  background-color: var(--n10);
  border-radius: 1rem;
  box-shadow: 1px 1px 1px 1px var(--n40);
`;

const StyledCheck = styled.i`
  font-size: 1.2rem;
  margin-right: 1rem;
  color: ${(props) => (props.completed ? 'var(--g200)' : 'var(--n100)')};
  cursor: pointer;
  transition: transform 100ms ease-out;

  &:hover {
    transform: scale(1.2);
  }
`;

const StyledTaskTitle = styled.p`
  margin: 0;
  text-decoration: ${(props) => (props.completed ? 'line-through' : 'initial')};
`;

export { StyledTaskCard, StyledCheck, StyledTaskTitle };
