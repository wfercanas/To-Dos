import React from "react";

import {
  StyledTaskCard,
  StyledTaskDescription,
  StyledCheck,
  StyledTaskTitle,
  StyledDelete,
} from "./styles";

function TaskCard({ text, completed }) {
  return (
    <StyledTaskCard>
      <StyledTaskDescription>
        <StyledCheck
          className={completed ? "ci-checkbox_square" : "ci-checkbox"}
          completed={completed}
        />
        <StyledTaskTitle completed={completed}>{text}</StyledTaskTitle>
      </StyledTaskDescription>
      <StyledDelete className="ci-trash_full" />
    </StyledTaskCard>
  );
}

export { TaskCard };
