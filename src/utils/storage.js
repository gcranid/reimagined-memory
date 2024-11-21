/**
 *
 * src/utils/storage.js
 *
 */

export const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLocalStorage = (key) => {
  const storedValue = localStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : [];
};

export const clearFromLocalStorage = () => {
  localStorage.clear();
};
