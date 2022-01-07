import React, { useState } from "react";

import { state } from "../../mocks/state.mock";
import { HomeUI } from "./HomeUI";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [tasks, setTasks] = useState(state.tasks);
  const [categories, setCategories] = useState(state.categories);

  const filteredTasks = (task) =>
    task.text.toLowerCase().includes(searchValue.toLowerCase());

  const handleComplete = (id) => {
    const newState = [...tasks];
    const taskIndex = newState.findIndex((task) => task.id === id);
    newState[taskIndex].completed = !newState[taskIndex].completed;
    setTasks(newState);
  };

  const deleteTask = (id) => {
    let newState = tasks.filter((task) => task.id !== id);
    setTasks(newState);
  };

  return (
    <HomeUI
      categories={categories}
      tasks={tasks}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      filteredTasks={filteredTasks}
      handleComplete={handleComplete}
      deleteTask={deleteTask}
    />
  );
};

export { Home };
