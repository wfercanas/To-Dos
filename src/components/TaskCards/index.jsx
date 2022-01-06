import React from "react";

import {
  StyledTaskCard,
  StyledTaskDescription,
  StyledCheck,
  StyledTaskTitle,
  StyledDelete,
} from "./styles";

function TaskCard({ id, text, completed, handleComplete, deleteTask }) {
  return (
    <StyledTaskCard>
      <StyledTaskDescription>
        <StyledCheck
          className={completed ? "ci-checkbox_square" : "ci-checkbox"}
          completed={completed}
          onClick={() => handleComplete(id)}
        />
        <StyledTaskTitle completed={completed}>{text}</StyledTaskTitle>
      </StyledTaskDescription>
      <StyledDelete className="ci-trash_full" onClick={() => deleteTask(id)} />
    </StyledTaskCard>
  );
}

export { TaskCard };
