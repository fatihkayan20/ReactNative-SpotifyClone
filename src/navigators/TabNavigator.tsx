import * as React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import {RouteNames} from '../types/RouteNames';
import AntDesign from 'react-native-vector-icons/AntDesign';

interface TabNavigatorProps {}
const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const tabs = [
  {
    route: RouteNames.Home,
    name: 'HOME',
    activeIcon: 'home',
    inactiveIcon: 'home-outline',
  },
  {
    route: RouteNames.Search,
    name: 'SEARCH',
    activeIcon: 'magnify',
    inactiveIcon: 'magnify-outline',
  },
];

export const TabNavigator: React.FunctionComponent<TabNavigatorProps> = () => {
  const onPress = () => {
    console.log('pressed');
  };
  return (
    <View style={styles.container}>
      {tabs.map((tab, index) => {
        return (
          <Pressable
            {...{key: index, onPress}}
            style={({pressed}) => ({
              ...styles.tabContainer,
              backgroundColor: pressed ? '#f0f0f0' : '#fff',
              opacity: pressed ? 0.5 : 1,
            })}>
            <AntDesign name="home" />
            <Text>{tab.name}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};
