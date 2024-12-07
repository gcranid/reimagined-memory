/**
 *
 * src/utils/prompts.js
 *
 */
import { storage } from "./storage";
const { getFromLocalStorage, clearFromLocalStorage, saveToLocalStorage } =
  storage;

export const submitPrompt = () => {
  saveToLocalStorage();
};

export const getPrompt = () => {
  getFromLocalStorage();
};

export const clearPrompt = () => {
  clearFromLocalStorage();
};
