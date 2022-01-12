import React, { useContext, useState } from "react";
import ReactDOM from "react-dom";

import { AppContext } from "../../context";
import { CategoriesModalUI } from "./CategoryModalUI";
import { TaskModalUI } from "./TaskModalUI";

const TasksModal = () => {
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskCategory, setNewTaskCategory] = useState("");
  const { state, createTask, setOpenTasksModal } = useContext(AppContext);

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
    document.getElementById("modal")
  );
};

const CategoriesModal = () => {
  const { state, createCategory, setOpenCategoriesModal } =
    useContext(AppContext);
  const [newCategoryName, setNewCategoryName] = useState("");

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
    document.getElementById("modal")
  );
};

export { TasksModal, CategoriesModal };
