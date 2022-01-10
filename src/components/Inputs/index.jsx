import React from "react";

import { StyledLabeledInput, StyledLabel, StyledInput } from "./styles";

const LabeledInput = ({ label }) => {
  return (
    <StyledLabeledInput>
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
      <StyledInput type="text" required id={label}></StyledInput>
    </StyledLabeledInput>
  );
};

export { LabeledInput };
