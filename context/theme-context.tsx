"use client";
import React from "react";
type Theme = "light" | "dark";
type ThemeContextType = {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
} | null;
export const ThemeContext = React.createContext<ThemeContextType>(null);

function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = React.useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === null) {
    throw new Error(
      "useThemeContext must be used within a  ThemeContextProvider",
    );
  }

  return context;
}

export default ThemeContextProvider;
