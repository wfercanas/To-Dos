import { useState, useEffect } from 'react';

function useLocalStorage(itemName, initialValue = '') {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    try {
      setTimeout(() => {
        const localStorageItem = localStorage.getItem(itemName);

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
        } else {
          setItem(JSON.parse(localStorageItem));
        }

        setLoading(false);
      }, 4000);
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  }, []);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return { item, saveItem, loading, error };
}

export { useLocalStorage };
