import React from "react";

import { StyledModal, StyledTitle, StyledButtonsContainer } from "./styles";

import { LabeledInput, LabeledSelect } from "../Inputs";
import { ActionButton } from "../Buttons";
import { Blanket } from "../Blankets";

const TaskModalUI = ({
  state,
  setOpenModal,
  newTaskName,
  newTaskCategory,
  handleTaskNameChange,
  handleTaskCategoryChange,
  handleSubmit,
}) => {
  return (
    <Blanket>
      <StyledModal>
        <StyledTitle>Create Task</StyledTitle>
        <form onSubmit={handleSubmit}>
          <LabeledInput
            label="Task Name"
            value={newTaskName}
            handleChange={handleTaskNameChange}
          />
          <LabeledSelect
            label="Category"
            options={state.categories}
            value={newTaskCategory}
            handleChange={handleTaskCategoryChange}
          />
          <StyledButtonsContainer>
            <ActionButton
              label="Cancel"
              action={false}
              handleClick={() => setOpenModal(false)}
            />
            <ActionButton label="Save" action={true} type="submit" />
          </StyledButtonsContainer>
        </form>
      </StyledModal>
    </Blanket>
  );
};

export { TaskModalUI };
