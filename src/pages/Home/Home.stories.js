import React from "react";
import { Home } from ".";

import { state } from "../../mocks/state.mock";

export default {
  title: "Pages / Home",
  components: Home,
};

export const HomePage = (args) => <Home {...args} />;
HomePage.args = {};
