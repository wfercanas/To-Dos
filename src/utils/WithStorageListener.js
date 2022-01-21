import React, { useState } from 'react';

const WithStorageListener = (WrappedComponent) => {
  return function WrappedComponentWithStorageListener({ sync, setSync }) {
    const [updates, setUpdates] = useState(false);

    window.addEventListener('storage', (event) => {
      if (event.key === 'STATE_v1') {
        setUpdates(true);
      }
    });

    const toggleUpdates = () => {
      setUpdates(!updates);
      setSync(!sync);
    };

    return <WrappedComponent updates={updates} toggleUpdates={toggleUpdates} />;
  };
};

export { WithStorageListener };
