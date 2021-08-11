import mockData from 'utils/usersData';

export const setLocalStorage = (keyword, data) => {
  localStorage.removeItem(keyword);
  localStorage.setItem(keyword, JSON.stringify(data));
};

export const getLocalStorage = (keyword) => {
  const storageData = JSON.parse(localStorage.getItem(keyword)) || mockData;

  return storageData;
};
