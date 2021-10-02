import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {VerticalScrollView} from '../../components/VerticalScrollView';
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
      <VerticalScrollView style={styles.scroll}>
        <RecentlyPlayed />
        <MadeForYou />
        <UniquelyYours />
        <PopularArtists />
      </VerticalScrollView>
    </View>
  );
};
