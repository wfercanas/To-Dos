import React, { useContext } from "react";

import { CategoryProgressCard, CreateCategoryCard } from "../CategoryCards";
import { SectionTitle } from "../Titles";
import { StyledCategoriesCarousel, StyledCarousel } from "./styles";

import { AppContext } from "../../context";

function CategoriesCarousel() {
  const { state, loading, error } = useContext(AppContext);
  const categories = state.categories;
  const tasks = state.tasks;

  if (loading) {
    return <p>Cargando categorias...</p>;
  }

  if (error) {
    return <p>Error cargando categorías...</p>;
  }

  return (
    <StyledCategoriesCarousel>
      <SectionTitle title="Categories" />
      <StyledCarousel>
        {categories.map((category, index) => (
          <CategoryProgressCard
            key={index}
            category={category}
            tasks={tasks.filter((task) => task.category === category)}
          />
        ))}
        <CreateCategoryCard />
      </StyledCarousel>
    </StyledCategoriesCarousel>
  );
}

export { CategoriesCarousel };
