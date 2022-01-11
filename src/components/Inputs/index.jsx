import React from "react";

import {
  StyledLabeledInput,
  StyledLabel,
  StyledInput,
  StyledSelect,
} from "./styles";

const LabeledInput = ({ label, value, handleChange }) => {
  return (
    <StyledLabeledInput>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput
        type="type"
        id={label}
        value={value}
        onChange={handleChange}
        required
      ></StyledInput>
    </StyledLabeledInput>
  );
};

const LabeledSelect = ({ label, options = [], value, handleChange }) => {
  return (
    <StyledLabeledInput>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledSelect required onChange={handleChange} value={value}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </StyledSelect>
    </StyledLabeledInput>
  );
};

export { LabeledInput, LabeledSelect };
