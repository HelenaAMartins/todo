import { create } from "zustand";

export const useTodoStore = create((set) => ({
  stringArray: JSON.parse(localStorage.getItem("todolist")) || [],
  setStringArray: (newArray) => {
    set({ stringArray: newArray });
    localStorage.setItem("todolist", JSON.stringify(newArray));
  },

  language: JSON.parse(localStorage.getItem("lang")) || "PT",
  setLanguage: (newLanguage) => {
    set({ language: newLanguage });
    localStorage.setItem("lang", JSON.stringify(newLanguage));
  },
}));
