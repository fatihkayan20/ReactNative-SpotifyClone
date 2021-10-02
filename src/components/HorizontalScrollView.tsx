import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';

interface HorizontalScrollViewProps {}
const styles = StyleSheet.create({
  listContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
});

export const HorizontalScrollView: React.FunctionComponent<HorizontalScrollViewProps> =
  ({children}) => {
    return (
      <ScrollView
        horizontal
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}>
        {children}
      </ScrollView>
    );
  };
