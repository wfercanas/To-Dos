import React from "react";

import { HomeUI } from "./HomeUI";
import { AppProvider } from "../../context";

const Home = () => {
  return (
    <AppProvider>
      <HomeUI />
    </AppProvider>
  );
};

export { Home };
