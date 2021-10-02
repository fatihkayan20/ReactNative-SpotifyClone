import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {HorizontalScrollView} from '../../../components/HorizontalScrollView';
import {TitleText} from '../../../components/TitleText';
import {popularArtists} from '../../../utility/data-uri';
import {ArtistCard} from './ArtistCard';

interface PopularArtistsProps {}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export const PopularArtists: React.FunctionComponent<PopularArtistsProps> =
  () => {
    return (
      <View>
        <View style={styles.row}>
          <TitleText {...{text: 'Popular Artists'}} />
        </View>
        <HorizontalScrollView>
          {popularArtists.map(({name, img}, key) => (
            <ArtistCard {...{key, name, img}} />
          ))}
        </HorizontalScrollView>
      </View>
    );
  };
