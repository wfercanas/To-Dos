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
  setOpenCategoriesModal,
  render,
}) {
  return (
    <StyledCategoriesCarousel>
      <SectionTitle title='Categories' />
      <StyledCarousel>
        {error && onError()}
        {loading && onLoading()}
        {!loading && !categories.length && (
          <CreateCategoryCard setOpenCategoriesModal={setOpenCategoriesModal} />
        )}
        {!loading && (
          <>
            {categories.map(render)}
            <CreateCategoryCard
              setOpenCategoriesModal={setOpenCategoriesModal}
            />
          </>
        )}
      </StyledCarousel>
    </StyledCategoriesCarousel>
  );
}

export { CategoriesCarousel };
