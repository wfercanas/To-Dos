import React from "react";
import {
  StyledCategoryProgressCard,
  StyledTasksCounter,
  StyledCategoryName,
  StyledProgressBar,
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

export { CategoryProgressCard };
