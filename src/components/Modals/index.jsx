import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { CategoriesModalUI } from './CategoryModalUI';
import { TaskModalUI } from './TaskModalUI';

const TasksModal = ({ state, createTask, setOpenTasksModal }) => {
  const [newTaskName, setNewTaskName] = useState('');
  const [newTaskCategory, setNewTaskCategory] = useState('');

  const handleTaskNameChange = ({ target }) => {
    setNewTaskName(target.value);
  };

  const handleTaskCategoryChange = ({ target }) => {
    setNewTaskCategory(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTask({ newTaskName, newTaskCategory });
    setOpenTasksModal(false);
  };

  return ReactDOM.createPortal(
    <TaskModalUI
      state={state}
      setOpenModal={setOpenTasksModal}
      newTaskName={newTaskName}
      newTaskCategory={newTaskCategory}
      handleTaskNameChange={handleTaskNameChange}
      handleTaskCategoryChange={handleTaskCategoryChange}
      handleSubmit={handleSubmit}
    />,
    document.getElementById('modal')
  );
};

const CategoriesModal = ({ state, createCategory, setOpenCategoriesModal }) => {
  const [newCategoryName, setNewCategoryName] = useState('');

  const handleCategoryNameChange = ({ target }) => {
    setNewCategoryName(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!state.categories.includes(newCategoryName)) {
      createCategory(newCategoryName);
    }
    setOpenCategoriesModal(false);
  };

  return ReactDOM.createPortal(
    <CategoriesModalUI
      setOpenCategoriesModal={setOpenCategoriesModal}
      newCategoryName={newCategoryName}
      handleCategoryNameChange={handleCategoryNameChange}
      handleSubmit={handleSubmit}
    />,
    document.getElementById('modal')
  );
};

export { TasksModal, CategoriesModal };
