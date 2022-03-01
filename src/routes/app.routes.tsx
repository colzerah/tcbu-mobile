import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Home } from '../pages/App/Home';
import { UserForm } from '../pages/App/Home/UserForm';

const App = createNativeStackNavigator();

function AppRoutes(): JSX.Element {
  return (
    <NavigationContainer>
      <App.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <App.Screen name="Home" component={Home} />
        <App.Screen
          name="UserForm"
          component={UserForm}
          options={{ headerShown: true, presentation: 'containedModal' }}
        />
      </App.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
