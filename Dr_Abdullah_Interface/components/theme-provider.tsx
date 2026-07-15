"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({ dark: false, toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const preferred = localStorage.getItem("hema-theme") === "dark";
    setDark(preferred);
    document.documentElement.classList.toggle("dark", preferred);
  }, []);
  const toggle = () => setDark((value) => {
    const next = !value;
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("hema-theme", next ? "dark" : "light");
    return next;
  });
  return <ThemeContext.Provider value={{ dark, toggle }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => useContext(ThemeContext);
