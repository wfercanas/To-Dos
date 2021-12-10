import React from 'react';
import { StyledNavbar, StyledIcon } from './styles';

function Navbar() {
  return (
    <StyledNavbar>
      <StyledIcon className='ci-menu_duo' />
      <StyledIcon className='ci-notification_outline' />
    </StyledNavbar>
  );
}

export { Navbar };
