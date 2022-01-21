import React, { useState } from 'react';

import { HomeUI } from './HomeUI';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const Home = () => {
  const {
    item: state,
    saveItem: saveState,
    loading,
    error,
    sync,
    setSync,
  } = useLocalStorage('STATE_v1', { categories: [], tasks: [] });

  const [searchValue, setSearchValue] = useState('');
  const [openTasksModal, setOpenTasksModal] = useState(false);
  const [openCategoriesModal, setOpenCategoriesModal] = useState(false);

  const filteredTasks = (task) =>
    task.text.toLowerCase().includes(searchValue.toLowerCase());

  const handleComplete = (id) => {
    const stateTasks = [...state.tasks];
    const taskIndex = stateTasks.findIndex((task) => task.id === id);
    stateTasks[taskIndex].completed = !stateTasks[taskIndex].completed;
    saveState({ ...state, tasks: stateTasks });
  };

  const deleteTask = (id) => {
    let stateTasks = state.tasks.filter((task) => task.id !== id);
    saveState({ ...state, tasks: stateTasks });
  };

  const createTask = ({ newTaskName, newTaskCategory }) => {
    const newState = { ...state };
    newState.tasks.push({
      id: new Date().getTime(),
      text: newTaskName,
      category: newTaskCategory,
      completed: false,
    });
    saveState({ ...newState });
  };

  const createCategory = (newCategoryName) => {
    const newState = { ...state };
    newState.categories.push(newCategoryName);
    saveState({ ...newState });
  };

  return (
    <HomeUI
      loading={loading}
      error={error}
      state={state}
      sync={sync}
      setSync={setSync}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTasks={filteredTasks}
      handleComplete={handleComplete}
      deleteTask={deleteTask}
      createTask={createTask}
      createCategory={createCategory}
      openTasksModal={openTasksModal}
      setOpenTasksModal={setOpenTasksModal}
      openCategoriesModal={openCategoriesModal}
      setOpenCategoriesModal={setOpenCategoriesModal}
    />
  );
};

export { Home };
