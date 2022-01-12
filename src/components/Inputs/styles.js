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
  padding: 4px 8px;
`;

const StyledSelect = styled.select`
  background-color: var(--n20);
  border: 1px solid var(--n200);
  border-radius: 8px;
  padding: 4px 8px;
`;

export { StyledLabeledInput, StyledLabel, StyledInput, StyledSelect };
