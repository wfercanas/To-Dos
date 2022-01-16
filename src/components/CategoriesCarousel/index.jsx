import React from 'react';
import { CreateCategoryCard } from '../CategoryCards';

import { SectionTitle } from '../Titles';
import { StyledCategoriesCarousel, StyledCarousel } from './styles';

function CategoriesCarousel({
  error,
  loading,
  categories,
  onError,
  onLoading,
  render,
}) {
  return (
    <StyledCategoriesCarousel>
      <SectionTitle title='Categories' />
      <StyledCarousel>
        {error && onError()}
        {loading && onLoading()}
        {!loading && !categories.length && <CreateCategoryCard />}
        {!loading && (
          <>
            {categories.map(render)}
            <CreateCategoryCard />
          </>
        )}
      </StyledCarousel>
    </StyledCategoriesCarousel>
  );
}

export { CategoriesCarousel };
