import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/HomeScreen';
import {RouteNames} from '../types/RouteNames';
import {SearchScreen} from '../screens/SearchScreen';
import {TabNavigator} from './TabNavigator';
import {LibraryScreen} from '../screens/LibraryScreen';
import {AccountScreen} from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function RootTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false}}
      tabBar={props => <TabNavigator {...{...props}} />}>
      <Tab.Screen
        name={RouteNames.Home}
        component={HomeScreen}
        options={{icons: {active: 'home', inactive: 'home-outline'}}}
      />
      <Tab.Screen
        name={RouteNames.Search}
        component={SearchScreen}
        options={{icons: {active: 'search', inactive: 'search-outline'}}}
      />
      <Tab.Screen
        name={RouteNames.Library}
        component={LibraryScreen}
        options={{icons: {active: 'library', inactive: 'library-outline'}}}
      />
      <Tab.Screen
        name={RouteNames.Account}
        component={AccountScreen}
        options={{icons: {active: 'person', inactive: 'person-outline'}}}
      />
    </Tab.Navigator>
  );
}
