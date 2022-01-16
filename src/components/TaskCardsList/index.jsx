import React from 'react';
import { StyledList } from './styles';

const TaskCardsList = ({
  error,
  loading,
  tasks,
  filteredTasks,
  onError,
  onLoading,
  onEmpty,
  onEmptySearch,
  render,
}) => {
  return (
    <StyledList>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !tasks.length && onEmpty()}
      {!loading && !!tasks.length && !filteredTasks.length && onEmptySearch()}
      {!loading && !!filteredTasks.length && filteredTasks.map(render)}
    </StyledList>
  );
};

export { TaskCardsList };
