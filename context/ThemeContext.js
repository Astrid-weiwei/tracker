import React, { createContext, useState, useContext } from 'react';
import commonStyles from './styles';
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => setIsDarkTheme((prev) => !prev);

  const themeStyles = {
    backgroundColor: isDarkTheme
      ? commonStyles.colors.backgroundDark
      : commonStyles.colors.backgroundLight,
    textColor: isDarkTheme
      ? commonStyles.colors.textDark
      : commonStyles.colors.textLight,
    itemColor: isDarkTheme
      ? commonStyles.colors.itemDark
      : commonStyles.colors.itemLight,
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme, themeStyles }}>
      {children}
    </ThemeContext.Provider>
  );
};