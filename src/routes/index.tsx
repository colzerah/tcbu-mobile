import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import AppRoutes from './app.routes';

function Routes(): JSX.Element {
  let loading;
  if (loading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ActivityIndicator size="large" color="#1b75bb" />
      </View>
    );

  return <AppRoutes />;
}

export default Routes;
