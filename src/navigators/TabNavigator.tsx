import * as React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: 'rgba(20,20,20,1)',
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 11,
    marginTop: 5,
  },
  activeText: {
    color: '#fff',
  },
  inactiveText: {
    color: '#ececec',
  },
});

export const TabNavigator: React.FunctionComponent<BottomTabBarProps> =
  props => {
    const {state, navigation, descriptors} = props;

    return (
      <View style={styles.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const icons = options.icons;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };
          return (
            <Pressable
              {...{key: index, onPress, onLongPress}}
              style={({pressed}) => ({
                ...styles.tabContainer,
                opacity: pressed ? 0.5 : 1,
                transform: [{scale: pressed ? 0.9 : 1}],
              })}>
              <Ionicons
                name={isFocused ? icons.active : icons.inactive}
                color={'#fff'}
                size={25}
              />
              <Text
                style={[
                  styles.text,
                  isFocused ? styles.activeText : styles.inactiveText,
                ]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  };
