import React from 'react';

import { StyledHome } from './styles';

import { CategoriesCarousel } from '../../components/CategoriesCarousel';
import {
  CategoryCardError,
  CategoryProgressCard,
  LoadingCategoryCard,
} from '../../components/CategoryCards';
import { Greeting } from '../../components/Greeting';
import { Navbar } from '../../components/Navbar';
import { SectionTitle } from '../../components/Titles';
import { EmptySearchMessage, Search } from '../../components/Search';
import {
  LoadingTaskCard,
  TaskCard,
  TaskEmpty,
  TaskError,
} from '../../components/TaskCards';
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
      <CategoriesCarousel
        error={error}
        loading={loading}
        tasks={tasks}
        categories={categories}
        setOpenCategoriesModal={setOpenCategoriesModal}
        onError={() => <CategoryCardError />}
        onLoading={() => <LoadingCategoryCard />}
        render={(category, index) => (
          <CategoryProgressCard
            key={index}
            category={category}
            tasks={tasks.filter((task) => task.category === category)}
          />
        )}
      />
      <SectionTitle title='Tasks' />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        loading={loading}
      />
      <TaskCardsList
        error={error}
        loading={loading}
        tasks={tasks}
        filteredTasks={tasks.filter(filteredTasks)}
        onError={() => <TaskError />}
        onLoading={() => <LoadingTaskCard />}
        onEmpty={() => <TaskEmpty />}
        onEmptySearch={() => <EmptySearchMessage searchText={searchValue} />}
        render={(task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            handleComplete={handleComplete}
            deleteTask={deleteTask}
          />
        )}
      >
        {(task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            handleComplete={handleComplete}
            deleteTask={deleteTask}
          />
        )}
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
