import React from "react";

import { StyledHome, StyledTasksContainer } from "./styles";

import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Greeting } from "../../components/Greeting";
import { Navbar } from "../../components/Navbar";
import { SectionTitle } from "../../components/Titles";
import { Search } from "../../components/Search";
import { TaskCard } from "../../components/TaskCards";
import { AddTaskButton } from "../../components/Buttons";

const HomeUI = ({
  loading,
  error,
  categories,
  tasks,
  searchValue,
  setSearchValue,
  filteredTasks,
  handleComplete,
  deleteTask,
}) => {
  return (
    <StyledHome>
      <Navbar />
      <Greeting name="Fernando" />

      {loading ? (
        <p>Cargando categorias...</p>
      ) : (
        <CategoriesCarousel categories={categories} tasks={tasks} />
      )}

      <SectionTitle title="Tasks" />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <StyledTasksContainer>
        {error && <p>Hubo un error cargando las tareas..</p>}
        {loading && <p>Cargando tareas...</p>}
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
      <AddTaskButton />
    </StyledHome>
  );
};

export { HomeUI };
