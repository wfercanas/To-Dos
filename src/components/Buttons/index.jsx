import React from 'react';
import { StyledAddTaskButton, StyledIcon } from './styles';

function AddTaskButton() {
  return (
    <StyledAddTaskButton>
      <StyledIcon className='ci-plus' />
    </StyledAddTaskButton>
  );
}

export { AddTaskButton };
