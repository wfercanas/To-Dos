import { useEffect, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_ITEM':
      return {
        ...state,
        item: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
      };
    case 'SET_SYNC':
      return {
        ...state,
        sync: action.payload,
      };
    default:
      return { ...state };
  }
};

function useLocalStorage(itemName, initialValue = '') {
  const initialState = {
    item: initialValue,
    loading: true,
    error: undefined,
    sync: true,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const setLoading = (newValue) =>
    dispatch({ type: 'SET_LOADING', payload: newValue });
  const setSync = (newValue) =>
    dispatch({ type: 'SET_SYNC', payload: newValue });
  const setItem = (newValue) =>
    dispatch({ type: 'SET_ITEM', payload: newValue });
  const setError = (newValue) =>
    dispatch({ type: 'SET_ERROR', payload: newValue });

  const { item, loading, error, sync } = state;

  useEffect(() => {
    if (sync) {
      if (!loading) {
        setLoading(true);
      }
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
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sync]);

  const saveItem = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItem);
  };

  return { item, saveItem, loading, setLoading, error, sync, setSync };
}

export { useLocalStorage };
