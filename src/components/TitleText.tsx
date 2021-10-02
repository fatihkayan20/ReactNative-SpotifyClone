import * as React from 'react';
import {StyleSheet, Text} from 'react-native';

interface TitleTextProps {
  text: string;
}
const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: 'rgba(0,0,0,1)',
  },
});

export const TitleText: React.FunctionComponent<TitleTextProps> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};
