import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { LogBox } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import { ThemeProvider } from './styles';
import AppView from './AppView';

function App(): JSX.Element {
  React.useEffect(() => {
    SplashScreen.hide();
    LogBox.ignoreAllLogs(true);
  });

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppView />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
