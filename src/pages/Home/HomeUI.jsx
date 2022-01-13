import React, { useContext } from "react";

import { StyledHome, StyledTasksContainer } from "./styles";

import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Greeting } from "../../components/Greeting";
import { Navbar } from "../../components/Navbar";
import { SectionTitle } from "../../components/Titles";
import { Search } from "../../components/Search";
import { LoadingTaskCard, TaskCard } from "../../components/TaskCards";
import { AddTaskButton } from "../../components/Buttons";

import { AppContext } from "../../context";
import { CategoriesModal, TasksModal } from "../../components/Modals";
import { LoadingCategoryCard } from "../../components/CategoryCards";

const HomeUI = () => {
  const {
    loading,
    error,
    state,
    filteredTasks,
    handleComplete,
    deleteTask,
    openTasksModal,
    setOpenTasksModal,
    openCategoriesModal,
  } = useContext(AppContext);

  const tasks = state.tasks;

  return (
    <StyledHome>
      <Navbar />
      <Greeting name="Guest" />
      {loading ? <LoadingCategoryCard /> : <CategoriesCarousel />}
      <SectionTitle title="Tasks" />
      <Search />
      <StyledTasksContainer>
        {error && <p>Hubo un error cargando las tareas..</p>}
        {loading && <LoadingTaskCard />}
        {!loading && !tasks.length && <p>Crea tu primer tarea!</p>}
        {tasks.filter(filteredTasks).map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            handleComplete={handleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </StyledTasksContainer>
      <AddTaskButton handleClick={() => setOpenTasksModal(true)} />
      {openTasksModal && <TasksModal />}
      {openCategoriesModal && <CategoriesModal />}
    </StyledHome>
  );
};

export { HomeUI };
