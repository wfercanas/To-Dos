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
  children,
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
        {!loading && !!categories.length && (
          <>
            {categories.map(render || children)}
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
