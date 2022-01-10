import React from "react";
import { ActionButton, AddTaskButton } from ".";

export default {
  title: "Components / Buttons",
  component: AddTaskButton,
};

export const AddTask = () => <AddTaskButton />;

export const Action = (args) => <ActionButton {...args} />;
Action.args = {
  label: "Save",
  action: true,
  handleClick: () => console.log("handleClick function"),
};
