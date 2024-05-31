import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import 'react-native-gesture-handler';
import { ColorModeProvider, useThemeContext } from './context/ColorModeContext';
import AnimatedSplash from "react-native-animated-splash-screen";
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './containers/StackNavigator'
import getTheme from './utils/theme';
import { Provider } from "react-redux"
import store from './redux/store';

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <AnimatedSplash
      translucent={false}
      isLoaded={isLoaded}
      logoImage={require("./assets/img/ziba-logo.png")}
      backgroundColor={"#00cc66"}
      logoHeight={510}
      logoWidth={242}
    >
      <ColorModeProvider>
        <Provider store={store}>
          <AppContent />
        </Provider>
      </ColorModeProvider>
    </AnimatedSplash>
  );
}

function AppContent() {
  const { theme } = useThemeContext();

  return (
    <NavigationContainer theme={getTheme(theme)} >
      <StatusBar
        backgroundColor={theme === 'light' ? '#fff' : '#2b2e43'}
        barStyle={theme === 'light' ? 'dark-content' : 'light-content'}
      />
      <StackNavigator />
    </NavigationContainer>
  )
}

