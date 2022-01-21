import React, { useState } from 'react';

const WithStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener({ sync, setSync }) {
    const [updates, setUpdates] = useState(false);

    window.addEventListener('storage', (event) => {
      if (event.key === 'STATE_v1') {
        setUpdates(true);
        setSync(false);
      }
    });

    const toggleUpdates = () => {
      if (updates) {
        setUpdates(false);
        setSync(true);
      }
    };

    return <WrappedComponent updates={updates} toggleUpdates={toggleUpdates} />;
  };
};

export { WithStorageListener };
