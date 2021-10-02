import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface ArtistCardProps {
  name: string;
  img: string;
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    width: 170,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
    borderRadius: 999,
  },
  name: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1)',
    marginTop: 5,
  },
});

export const ArtistCard: React.FunctionComponent<ArtistCardProps> = ({
  img,
  name,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: img}} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};
