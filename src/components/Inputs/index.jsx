import React from "react";

import {
  StyledLabeledInput,
  StyledLabel,
  StyledInput,
  StyledSelect,
} from "./styles";

const LabeledInput = ({ label }) => {
  return (
    <StyledLabeledInput>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput type="type" required id={label}></StyledInput>
    </StyledLabeledInput>
  );
};

const LabeledSelect = ({ label, options = [] }) => {
  return (
    <StyledLabeledInput>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledSelect required>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </StyledSelect>
    </StyledLabeledInput>
  );
};

export { LabeledInput, LabeledSelect };
