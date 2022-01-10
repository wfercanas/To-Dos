import React from "react";
import { LabeledInput } from ".";

export default {
  title: "Components / Inputs",
  components: LabeledInput,
};

export const TextInput = (args) => <LabeledInput {...args} />;
TextInput.args = {
  label: "Task name",
};
