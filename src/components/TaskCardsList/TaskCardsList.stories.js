import React from 'react';
import { TaskCardsList } from '.';
import { TaskCard } from '../TaskCards';

export default {
  title: 'Components / Task Cards',
  components: TaskCardsList,
};

export const TasksList = () => (
  <TaskCardsList>
    <TaskCard text='Tomar curso de intro a React' completed={true} />
    <TaskCard text='Tomar curso de intro a React' completed={true} />
    <TaskCard text='Tomar curso de intro a React' completed={true} />
    <TaskCard text='Tomar curso de intro a React' completed={true} />
  </TaskCardsList>
);
