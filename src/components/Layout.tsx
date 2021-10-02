import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {TabNavigator} from '../navigators/TabNavigator';

interface LayoutProps {}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const Layout: React.FunctionComponent<LayoutProps> = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
      <TabNavigator />
    </View>
  );
};
