import React from 'react';

import { StyledHome } from './styles';

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
import { TaskCardsList } from '../../components/TaskCardsList';

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
      <CategoriesCarousel>
        {error && <p>Error cargando categorías...</p>}
        {loading && <LoadingCategoryCard />}
        {categories.map((category, index) => (
          <CategoryProgressCard
            key={index}
            category={category}
            tasks={tasks.filter((task) => task.category === category)}
          />
        ))}
        {!error && (
          <CreateCategoryCard setOpenCategoriesModal={setOpenCategoriesModal} />
        )}
      </CategoriesCarousel>
      <SectionTitle title='Tasks' />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <TaskCardsList>
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
      </TaskCardsList>
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
