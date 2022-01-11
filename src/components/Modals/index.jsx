import React, { useContext } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "../../context";

import { StyledModal, StyledTitle, StyledButtonsContainer } from "./styles";

import { LabeledInput } from "../Inputs";
import { ActionButton } from "../Buttons";
import { Blanket } from "../Blankets";

const Modal = () => {
  const { setOpenModal } = useContext(AppContext);

  return ReactDOM.createPortal(
    <Blanket>
      <StyledModal>
        <StyledTitle>Create Task</StyledTitle>
        <LabeledInput label="Task Name" />
        <LabeledInput label="Category" />
        <StyledButtonsContainer>
          <ActionButton
            label="Cancel"
            action={false}
            handleClick={() => setOpenModal(false)}
          />
          <ActionButton label="Save" action={true} />
        </StyledButtonsContainer>
      </StyledModal>
    </Blanket>,
    document.getElementById("modal")
  );
};

export { Modal };
