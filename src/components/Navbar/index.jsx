import React from 'react';
import { StyledNavbar, StyledIcon, StyledOptions } from './styles';

function Navbar() {
  return (
    <StyledNavbar>
      <StyledIcon className='ci-menu_duo' />
      <StyledOptions>
        <StyledIcon className='ci-search' />
        <StyledIcon className='ci-notification_outline' />
      </StyledOptions>
    </StyledNavbar>
  );
}

export { Navbar };
