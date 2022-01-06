import React from "react";
import { Home } from ".";

export default {
  title: "Pages / Home",
  components: Home,
};

export const HomePage = (args) => <Home {...args} />;
HomePage.args = {};
