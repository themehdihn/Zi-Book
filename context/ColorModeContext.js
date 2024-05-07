import React, {createContext, useState, useContext, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import changeNavigationBarColor from 'react-native-navigation-bar-color';

const ColorModeContext = createContext();

export const useThemeContext = () => {
  return useContext(ColorModeContext);
};

export const ColorModeProvider = ({children}) => {
  const scheme = useColorScheme();
  const [theme, setTheme] = useState(scheme);

  useEffect(() => {
    if (theme === 'dark') {
      changeNavigationBarColor('#2b2e43');
    } else {
      changeNavigationBarColor('#ffffff');
    }
  }, []);

  const toggleThemeAndNavigationBarColor = newTheme => {
    if (theme !== newTheme) {
      const navigationBarColor = newTheme === 'dark' ? '#2b2e43' : '#ffffff';
      changeNavigationBarColor(navigationBarColor, true, false);
      setTheme(newTheme);
    }
  };

  const darkModeHandler = () => {
    toggleThemeAndNavigationBarColor('dark');
  };

  const lightModeHandler = () => {
    toggleThemeAndNavigationBarColor('light');
  };

  return (
    <ColorModeContext.Provider
      value={{theme, darkModeHandler, lightModeHandler}}>
      {children}
    </ColorModeContext.Provider>
  );
};
