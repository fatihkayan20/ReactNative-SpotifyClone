import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';
import {RouteNames} from '../types/RouteNames';
import {HomeScreen} from '../screens/HomeScreen';
import {SearchScreen} from '../screens/SearchScreen';
import RootTabNavigator from './RootTabNavigator';
import {AccountScreen} from '../screens/AccountScreen';
import {LibraryScreen} from '../screens/LibraryScreen';

interface RootStackNavigatorProps {}

const Stack = createNativeStackNavigator();

export const RootStackNavigator: React.FunctionComponent<RootStackNavigatorProps> =
  () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={RouteNames.TabNav} component={RootTabNavigator} />
        <Stack.Screen name={RouteNames.Home} component={HomeScreen} />
        <Stack.Screen name={RouteNames.Search} component={SearchScreen} />
        <Stack.Screen name={RouteNames.Library} component={LibraryScreen} />
        <Stack.Screen name={RouteNames.Account} component={AccountScreen} />
      </Stack.Navigator>
    );
  };
