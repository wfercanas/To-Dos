import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "../../context";

import { StyledModal, StyledTitle, StyledButtonsContainer } from "./styles";

import { LabeledInput, LabeledSelect } from "../Inputs";
import { ActionButton } from "../Buttons";
import { Blanket } from "../Blankets";

const Modal = () => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("");
  const { state, createTask, setOpenModal } = useContext(AppContext);

  const handleTaskNameChange = ({ target }) => {
    setNewTaskName(target.value);
  };

  const handleTaskCategoryChange = ({ target }) => {
    setNewTaskCategory(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({ newTaskName, newTaskCategory });
    setOpenModal(false);
  };

  return ReactDOM.createPortal(
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
    </Blanket>,
    document.getElementById("modal")
  );
};

export { Modal };
