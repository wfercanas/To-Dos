import React, { useState } from "react";

import { HomeUI } from "./HomeUI";
import { useLocalStorage } from "../../hooks/useLocalStorage";

const Home = () => {
  const {
    item: state,
    saveItem: saveState,
    loading,
    error,
  } = useLocalStorage("STATE_v1", { categories: [], tasks: [] });
  const [searchValue, setSearchValue] = useState("");

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

  return (
    <HomeUI
      loading={loading}
      error={error}
      categories={state.categories}
      tasks={state.tasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTasks={filteredTasks}
      handleComplete={handleComplete}
      deleteTask={deleteTask}
    />
  );
};

export { Home };
