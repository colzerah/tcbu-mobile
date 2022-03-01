import React from 'react';
import { View, StatusBar } from 'react-native';
import { useTheme } from 'styled-components';
import Routes from './routes';

function AppView(): JSX.Element {
  const theme = useTheme();
  return (
    <>
      <StatusBar
        barStyle={theme.title === 'default' ? 'dark-content' : 'light-content'}
        backgroundColor={theme.colors.light}
      />
      <View style={{ flex: 1, backgroundColor: theme.colors.blue }}>
        <Routes />
      </View>
    </>
  );
}

export default AppView;
