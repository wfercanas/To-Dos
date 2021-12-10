import React from 'react';
import { TaskCard } from '.';

export default {
  title: 'Task Cards',
  component: TaskCard,
};

export const Pending = () => (
  <TaskCard text='Cortar cebolla' completed={false} />
);

export const Done = () => (
  <TaskCard text='Tomar curso de intro a React' completed={true} />
);
