import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  defaultTheme: "light",
  darkTheme: () => {},
  lightTheme: () => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useThemeSwitcher() {
  return useContext(ThemeContext)
}