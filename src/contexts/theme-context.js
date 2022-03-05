import { createContext } from "react";

export const ThemeContext = createContext();

function ThemeProvider(props) {
  const theme = {
    name: "light",
    toggleTheme: (newTheme) => { }
  }

  return <ThemeContext.Provider value={theme} {...props} />
}

export { ThemeProvider };