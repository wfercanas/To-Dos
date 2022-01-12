import React, { useState, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const AppContext = createContext();

function AppProvider({ children }) {
  const {
    item: state,
    saveItem: saveState,
    loading,
    error,
  } = useLocalStorage("STATE_v1", { categories: [], tasks: [] });

  const [searchValue, setSearchValue] = useState("");
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
    <AppContext.Provider
      value={{
        loading,
        error,
        state,
        searchValue,
        setSearchValue,
        filteredTasks,
        handleComplete,
        deleteTask,
        createTask,
        createCategory,
        openTasksModal,
        setOpenTasksModal,
        openCategoriesModal,
        setOpenCategoriesModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export { AppContext, AppProvider };
