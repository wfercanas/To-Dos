import React from "react";
import { StyledAddTaskButton, StyledIcon, StyledActionButton } from "./styles";

function AddTaskButton({ handleClick }) {
  return (
    <StyledAddTaskButton onClick={handleClick}>
      <StyledIcon className="ci-plus" />
    </StyledAddTaskButton>
  );
}

function ActionButton({ type = "button", label, action, handleClick }) {
  return (
    <StyledActionButton type={type} onClick={handleClick} action={action}>
      {label}
    </StyledActionButton>
  );
}

export { AddTaskButton, ActionButton };
