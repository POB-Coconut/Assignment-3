import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue = null) => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);

    return savedValue ? JSON.parse(savedValue) : initialValue;
  });

  useEffect(() => {
    console.log(value);
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
