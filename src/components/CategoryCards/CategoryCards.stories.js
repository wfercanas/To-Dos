import React from "react";
import {
  CategoryProgressCard,
  CreateCategoryCard,
  LoadingCategoryCard,
} from ".";

export default {
  title: "Components / Category Cards",
  component: [CategoryProgressCard, CreateCategoryCard, LoadingCategoryCard],
};

export const Category = () => (
  <CategoryProgressCard
    category="Business"
    tasks={[
      {
        text: "Cortar cebolla",
        completed: true,
      },
      {
        text: "Tomar curso de intro a React",
        completed: false,
      },
      {
        text: "Llorar con la llorona",
        completed: false,
      },
    ]}
  />
);

export const Create = () => <CreateCategoryCard />;

export const Loading = () => <LoadingCategoryCard />;
