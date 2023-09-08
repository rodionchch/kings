import React, {createContext} from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {ThemeProp} from 'react-native-paper/lib/typescript/types';

import {store} from 'store';
import {API_URL, DEBUG} from '@env';

import useApp from './useApp';
import Home from 'screens/Home';

console.info('App Running ==>', API_URL, 'Debug:', DEBUG);

export const PreferencesContext = createContext({
  setTheme: (theme: string | null) => theme,
  toggleTheme: () => {},
  isThemeDark: false,
});

const flex = {flex: 1};

function App(): JSX.Element {
  const {isThemeDark, theme, preferences} = useApp();

  return (
    <Provider store={store}>
      <PreferencesContext.Provider
        value={
          preferences as {
            setTheme: (theme: string | null) => typeof theme;
            toggleTheme: () => void;
            isThemeDark: boolean;
          }
        }>
        <GestureHandlerRootView style={flex}>
          <PaperProvider theme={theme as ThemeProp}>
            <StatusBar
              backgroundColor={theme?.colors?.background}
              barStyle={isThemeDark ? 'light-content' : 'dark-content'}
            />
            <SafeAreaProvider>
              <Home theme={theme} />
            </SafeAreaProvider>
          </PaperProvider>
        </GestureHandlerRootView>
      </PreferencesContext.Provider>
    </Provider>
  );
}
export default App;
