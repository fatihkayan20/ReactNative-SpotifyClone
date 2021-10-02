import * as React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {MadeForYou} from './components/MadeForYou';
import {PopularArtists} from './components/PopularArtists';
import {RecentlyPlayed} from './components/RecentlyPlayed';
import {UniquelyYours} from './components/UniquelyYours';

interface HomeScreenProps {}
const styles = StyleSheet.create({
  scroll: {
    paddingHorizontal: 10,
  },
});

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  return (
    <View>
      <ScrollView style={styles.scroll}>
        <RecentlyPlayed />
        <MadeForYou />
        <UniquelyYours />
        <PopularArtists />
      </ScrollView>
    </View>
  );
};
