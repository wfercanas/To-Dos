import React from "react";
import { LoadingTaskCard, TaskCard } from ".";

export default {
  title: "Components / Task Cards",
  component: [TaskCard, LoadingTaskCard],
};

export const Pending = () => (
  <TaskCard text="Cortar cebolla" completed={false} />
);

export const Done = () => (
  <TaskCard text="Tomar curso de intro a React" completed={true} />
);

export const Loading = () => <LoadingTaskCard />;
