import * as React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface PostCardProps {
  img: string;
  title?: string;
  subtitle?: string;
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginBottom: 10,
    width: 170,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },
  title: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,1)',
    marginTop: 5,
  },
  subtitle: {
    fontSize: 12,
    marginTop: 5,
  },
});

export const PostCard: React.FunctionComponent<PostCardProps> = ({
  img,
  title,
  subtitle,
}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: img}} style={styles.image} />
      {title && <Text style={styles.title}>{title}</Text>}
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </View>
  );
};
