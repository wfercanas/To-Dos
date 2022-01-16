import React from 'react';
import { StyledList } from './styles';

const TaskCardsList = ({
  error,
  loading,
  tasks,
  onError,
  onLoading,
  onEmpty,
  render,
}) => {
  return (
    <>
      {error && onError()}
      {loading && onLoading()}
      {!loading && !tasks.length && onEmpty()}
      <StyledList>{tasks.map(render)}</StyledList>
    </>
  );
};

export { TaskCardsList };
