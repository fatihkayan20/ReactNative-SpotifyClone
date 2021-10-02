import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {HorizontalScrollView} from '../../../components/HorizontalScrollView';
import {TitleText} from '../../../components/TitleText';
import {nearlyPlayedList} from '../../../utility/data-uri';
import {ActionButtons} from './ActionButtons';
import {PostCard} from './PostCard';

interface RecentlyPlayedProps {}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export const RecentlyPlayed: React.FunctionComponent<RecentlyPlayedProps> =
  () => {
    return (
      <View>
        <View style={styles.row}>
          <TitleText {...{text: 'Recently Played'}} />
          <ActionButtons />
        </View>
        <HorizontalScrollView>
          {nearlyPlayedList.map(({title, img, subtitle}, key) => (
            <PostCard {...{key, img, title, subtitle}} />
          ))}
        </HorizontalScrollView>
      </View>
    );
  };
