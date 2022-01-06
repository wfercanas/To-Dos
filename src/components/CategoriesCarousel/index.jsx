import React from "react";
import { CategoryProgressCard } from "../CategoryCards";
import { SectionTitle } from "../Titles";
import { StyledCategoriesCarousel, StyledCarousel } from "./styles";

function CategoriesCarousel({ categories, tasks }) {
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
      </StyledCarousel>
    </StyledCategoriesCarousel>
  );
}

export { CategoriesCarousel };
