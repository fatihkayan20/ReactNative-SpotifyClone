import * as React from 'react';
import {Pressable, StyleSheet, TextInput, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface SearchInputProps {}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  input: {
    flex: 1,
  },
});

export const SearchInput: React.FunctionComponent<SearchInputProps> = () => {
  return (
    <Pressable style={styles.container}>
      <Ionicons name="ios-search" size={24} color="black" />
      <TextInput style={styles.input} />
    </Pressable>
  );
};
