import React, { useContext } from "react";
import { AppContext } from "../../context";
import {
  StyledCategoryProgressCard,
  StyledTasksCounter,
  StyledCategoryName,
  StyledProgressBar,
  StyledCreateCategoryCard,
  StyledPlusIcon,
} from "./styles";

function CategoryProgressCard({ category, tasks }) {
  function calcProgress(tasks) {
    const completed =
      tasks.filter((task) => task.completed === true).length * 100;
    return Math.round(completed / tasks.length);
  }

  return (
    <StyledCategoryProgressCard>
      <StyledTasksCounter>{tasks.length} tasks</StyledTasksCounter>
      <StyledCategoryName>{category}</StyledCategoryName>
      <StyledProgressBar percentage={calcProgress(tasks)} />
    </StyledCategoryProgressCard>
  );
}

function CreateCategoryCard() {
  const { setOpenCategoriesModal } = useContext(AppContext);
  return (
    <StyledCreateCategoryCard onClick={() => setOpenCategoriesModal(true)}>
      <StyledPlusIcon className="ci-plus_circle" />
    </StyledCreateCategoryCard>
  );
}

export { CategoryProgressCard, CreateCategoryCard };
