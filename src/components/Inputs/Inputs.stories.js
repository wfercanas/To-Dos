import React from "react";
import { LabeledInput, LabeledSelect } from ".";

export default {
  title: "Components / Inputs",
  components: [LabeledInput, LabeledSelect],
};

export const TextInput = (args) => <LabeledInput {...args} />;
TextInput.args = {
  label: "Task name",
};

export const Select = (args) => <LabeledSelect {...args} />;
Select.args = {
  label: "Category",
  options: ["University", "Home", "Work", "Travel"],
};
