import React from 'react';

import { StyledTaskCard, StyledCheck, StyledTaskTitle } from './styles';

function TaskCard({ text, completed }) {
  return (
    <StyledTaskCard>
      <StyledCheck
        className={completed ? 'ci-checkbox_square' : 'ci-checkbox'}
        completed={completed}
      />
      <StyledTaskTitle completed={completed}>{text}</StyledTaskTitle>
    </StyledTaskCard>
  );
}

export { TaskCard };
