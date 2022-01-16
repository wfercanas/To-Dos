import React from 'react';

import {
  StyledTaskCard,
  StyledTaskDescription,
  StyledCheck,
  StyledTaskTitle,
  StyledDelete,
  StyledLoadingTaskCard,
} from './styles';

function TaskCard({ id, text, completed, handleComplete, deleteTask }) {
  return (
    <StyledTaskCard>
      <StyledTaskDescription>
        <StyledCheck
          className={completed ? 'ci-checkbox_square' : 'ci-checkbox'}
          completed={completed}
          onClick={() => handleComplete(id)}
        />
        <StyledTaskTitle completed={completed}>{text}</StyledTaskTitle>
      </StyledTaskDescription>
      <StyledDelete className='ci-trash_full' onClick={() => deleteTask(id)} />
    </StyledTaskCard>
  );
}

function LoadingTaskCard() {
  return <StyledLoadingTaskCard />;
}

function TaskError() {
  return <p>Hubo un error cargando las tareas..</p>;
}

function TaskEmpty() {
  return <p>¡Crea tu primer tarea!</p>;
}

export { TaskCard, LoadingTaskCard, TaskError, TaskEmpty };
