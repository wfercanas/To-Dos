import React from 'react';
import { StyledNavbar, StyledIcon } from './styles';

import { WithStorageListener } from '../../utils/WithStorageListener';

function NavbarWithoutListener({ updates, toggleUpdates }) {
  return (
    <StyledNavbar>
      <StyledIcon className='ci-menu_duo' />
      {!updates ? (
        <StyledIcon className='ci-notification_outline' updates={updates} />
      ) : (
        <StyledIcon
          className='ci-notification_outline_dot'
          updates={updates}
          onClick={toggleUpdates}
        />
      )}
    </StyledNavbar>
  );
}

const Navbar = WithStorageListener(NavbarWithoutListener);

export { Navbar };
