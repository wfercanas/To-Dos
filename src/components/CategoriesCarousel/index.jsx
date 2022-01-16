import React from 'react';

import { SectionTitle } from '../Titles';
import { StyledCategoriesCarousel, StyledCarousel } from './styles';

function CategoriesCarousel({ children }) {
  return (
    <StyledCategoriesCarousel>
      <SectionTitle title='Categories' />
      <StyledCarousel>{children}</StyledCarousel>
    </StyledCategoriesCarousel>
  );
}

export { CategoriesCarousel };
