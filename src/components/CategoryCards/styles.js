import styled from "styled-components";

const StyledCategoryProgressCard = styled.div`
  padding: 1rem;
  max-width: 12rem;
  min-width: 8rem;
  background-color: var(--n10);
  border-radius: 1rem;
  border: 1px solid var(--n40);
  box-shadow: 2px 2px 4px 1px var(--n40);
  cursor: grab;
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
    content: "";
    position: absolute;
    height: 4px;
    width: ${(props) => `${props.percentage}%`};
    border-radius: inherit;
    background-color: var(--b200);
  }
`;

const StyledCreateCategoryCard = styled(StyledCategoryProgressCard)`
  background-color: var(--n100);
  cursor: pointer;
`;

const StyledPlusIcon = styled.i`
  min-height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 2.4rem;
  color: var(--n10);
  text-align: center;
`;

export {
  StyledCategoryProgressCard,
  StyledTasksCounter,
  StyledCategoryName,
  StyledProgressBar,
  StyledCreateCategoryCard,
  StyledPlusIcon,
};
