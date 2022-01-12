import React from "react";

import { StyledModal, StyledTitle, StyledButtonsContainer } from "./styles";

import { LabeledInput } from "../Inputs";
import { ActionButton } from "../Buttons";
import { Blanket } from "../Blankets";

const CategoriesModalUI = ({
  newCategoryName,
  handleCategoryNameChange,
  handleSubmit,
  setOpenCategoriesModal,
}) => {
  return (
    <Blanket>
      <StyledModal>
        <StyledTitle>Create Category</StyledTitle>
        <form onSubmit={handleSubmit}>
          <LabeledInput
            label="Category Name"
            value={newCategoryName}
            handleChange={handleCategoryNameChange}
          />
          <StyledButtonsContainer>
            <ActionButton
              label="Cancel"
              action={false}
              handleClick={() => setOpenCategoriesModal(false)}
            />
            <ActionButton label="Save" action={true} type="submit" />
          </StyledButtonsContainer>
        </form>
      </StyledModal>
    </Blanket>
  );
};

export { CategoriesModalUI };
