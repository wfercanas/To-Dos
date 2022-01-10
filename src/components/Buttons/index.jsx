import React from "react";
import { StyledAddTaskButton, StyledIcon, StyledActionButton } from "./styles";

function AddTaskButton() {
  return (
    <StyledAddTaskButton>
      <StyledIcon className="ci-plus" />
    </StyledAddTaskButton>
  );
}

function ActionButton({ label, action, handleClick }) {
  return (
    <StyledActionButton onClick={handleClick} action={action}>
      {label}
    </StyledActionButton>
  );
}

export { AddTaskButton, ActionButton };
