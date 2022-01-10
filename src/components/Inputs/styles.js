import styled from "styled-components";

const StyledLabeledInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  max-width: 300px;
`;

const StyledLabel = styled.label`
  color: var(--n200);
`;

const StyledInput = styled.input`
  border-radius: 8px;
  border: 1px solid var(--n200);
`;

export { StyledLabeledInput, StyledLabel, StyledInput };
