import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(() => {
    const savedValue = JSON.parse(localStorage.getItem(key));

    return savedValue || initialValue;
  });

  useEffect(() => {
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
};

export default useLocalStorage;
