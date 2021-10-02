import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import {RootStackNavigator} from './navigators/RootStackNavigator';
import {navigationRef} from './utility/RootNavigator';

export const App: React.FunctionComponent = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <RootStackNavigator />
    </NavigationContainer>
  );
};
