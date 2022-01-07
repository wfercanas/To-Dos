import React, { useState } from "react";

import { HomeUI } from "./HomeUI";

function useLocalStorage(itemName, initialValue = "") {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return [item, saveItem];
}

const Home = () => {
  const [state, saveState] = useLocalStorage("STATE_v1", []);
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
