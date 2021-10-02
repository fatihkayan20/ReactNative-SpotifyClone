import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

interface VerticalScrollViewProps {}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export const VerticalScrollView: React.FunctionComponent<VerticalScrollViewProps> =
  ({children}) => {
    return (
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
    );
  };
