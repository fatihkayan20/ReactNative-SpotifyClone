import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

interface ActionButtonsProps {}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
    color: 'rgba(0,0,0,1)',
  },
});

export const ActionButtons: React.FunctionComponent<ActionButtonsProps> =
  () => {
    return (
      <View style={styles.container}>
        <Feather name="bell" size={25} style={styles.icon} />
        <Entypo name="back-in-time" size={25} style={styles.icon} />
        <Feather name="settings" size={25} style={styles.icon} />
      </View>
    );
  };
