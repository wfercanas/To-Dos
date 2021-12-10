import styled from 'styled-components';

const StyledCategoryProgressCard = styled.div`
  padding: 1rem;
  max-width: 10rem;
  background-color: var(--n10);
  border-radius: 1rem;
  box-shadow: 1px 1px 1px 1px var(--n40);
`;

const StyledTasksCounter = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: var(--n200);
`;

const StyledCategoryName = styled.p`
  margin: 0.5rem 0 1rem;
  font-weight: bold;
`;

const StyledProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 4px;
  border-radius: 1rem;
  background-color: var(--n40);

  &::before {
    content: '';
    position: absolute;
    height: 4px;
    width: ${(props) => `${props.percentage}%`};
    border-radius: inherit;
    background-color: var(--b200);
  }
`;

export {
  StyledCategoryProgressCard,
  StyledTasksCounter,
  StyledCategoryName,
  StyledProgressBar,
};
