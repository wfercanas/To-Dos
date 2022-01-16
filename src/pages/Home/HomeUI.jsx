import React from 'react';

import { StyledHome, StyledTasksContainer } from './styles';

import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import {
  CategoryProgressCard,
  CreateCategoryCard,
  LoadingCategoryCard,
} from '../../components/CategoryCards';
import { Greeting } from '../../components/Greeting';
import { Navbar } from '../../components/Navbar';
import { SectionTitle } from '../../components/Titles';
import { Search } from '../../components/Search';
import { LoadingTaskCard, TaskCard } from '../../components/TaskCards';
import { AddTaskButton } from '../../components/Buttons';

import { CategoriesModal, TasksModal } from '../../components/Modals';

const HomeUI = ({
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
}) => {
  const tasks = state.tasks;
  const categories = state.categories;

  return (
    <StyledHome>
      <Navbar />
      <Greeting name='Guest' />
      {loading ? (
        <LoadingCategoryCard />
      ) : (
        <CategoriesCarousel>
          {error && <p>Error cargando categorías...</p>}
          {loading && <p>Cargando categorias...</p>}
          {categories.map((category, index) => (
            <CategoryProgressCard
              key={index}
              category={category}
              tasks={tasks.filter((task) => task.category === category)}
            />
          ))}
          {!loading && !error && (
            <CreateCategoryCard
              setOpenCategoriesModal={setOpenCategoriesModal}
            />
          )}
        </CategoriesCarousel>
      )}
      <SectionTitle title='Tasks' />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
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
      {openTasksModal && (
        <TasksModal
          state={state}
          createTask={createTask}
          setOpenTasksModal={setOpenTasksModal}
        />
      )}
      {openCategoriesModal && (
        <CategoriesModal
          state={state}
          createCategory={createCategory}
          setOpenCategoriesModal={setOpenCategoriesModal}
        />
      )}
    </StyledHome>
  );
};

export { HomeUI };
