import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {RootStackNavigator} from './navigators/RootStackNavigator';

export const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
