import React from 'react';
import { StyledNavbar, StyledIcon } from './styles';

import { WithStorageListener } from '../../utils/WithStorageListener';

function NavbarWithoutListener({ updates, toggleUpdates }) {
  return (
    <StyledNavbar>
      <StyledIcon className='ci-menu_duo' />
      <StyledIcon
        className='ci-refresh_02'
        updates={updates}
        onClick={toggleUpdates}
      />
    </StyledNavbar>
  );
}

const Navbar = WithStorageListener(NavbarWithoutListener);

export { Navbar };
