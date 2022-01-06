import React, { useState } from "react";

import { StyledHome, StyledTasksContainer } from "./styles";

import { CategoriesCarousel } from "../../components/CategoriesCarousel";
import { Greeting } from "../../components/Greeting";
import { Navbar } from "../../components/Navbar";
import { SectionTitle } from "../../components/Titles";
import { Search } from "../../components/Search";
import { TaskCard } from "../../components/TaskCards";

import { state } from "../../mocks/state.mock";
import { AddTaskButton } from "../../components/Buttons";

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

  return (
    <StyledHome>
      <Navbar />
      <Greeting name="Fernando" />
      <CategoriesCarousel categories={categories} tasks={tasks} />
      <SectionTitle title="Tasks" />
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
      <StyledTasksContainer>
        {tasks.filter(filteredTasks).map((task) => (
          <TaskCard
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
            handleComplete={handleComplete}
          />
        ))}
      </StyledTasksContainer>
      <AddTaskButton />
    </StyledHome>
  );
};

export { Home };
