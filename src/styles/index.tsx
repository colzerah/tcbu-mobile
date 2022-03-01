/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useCallback } from 'react';

import {
  DefaultTheme,
  ThemeProvider as StyledProvider,
} from 'styled-components';
import defaultTheme from './themes/defaultTheme';
import darkTheme from './themes/darkTheme';

interface IThemeContextData {
  toggleTheme(): void;
  theme: DefaultTheme;
}

const ThemeContext = createContext<IThemeContextData>({} as IThemeContextData);

function ThemeProvider({ children }): JSX.Element {
  const [theme, setTheme] = useState(defaultTheme);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'default' ? darkTheme : defaultTheme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
