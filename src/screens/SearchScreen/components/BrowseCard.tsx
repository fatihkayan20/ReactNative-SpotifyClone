import * as React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

interface BrowseCardProps {
  title: string;
  img: string;
  backgroundColor: string;
}

const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: (width - 35) / 2,
    height: 100,
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 5,
  },
  img: {
    position: 'absolute',
    right: -10,
    bottom: -10,
    width: '40%',
    height: 80,
    borderRadius: 5,
    transform: [{rotate: '30deg'}],
  },
});

export const BrowseCard: React.FunctionComponent<BrowseCardProps> = ({
  backgroundColor,
  img,
  title,
}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{uri: img}} style={styles.img} />
    </View>
  );
};
