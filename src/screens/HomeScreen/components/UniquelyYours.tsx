import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {HorizontalScrollView} from '../../../components/HorizontalScrollView';
import {TitleText} from '../../../components/TitleText';
import {uniquelyYoursList} from '../../../utility/data-uri';
import {PostCard} from './PostCard';

interface UniquelyYoursProps {}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export const UniquelyYours: React.FunctionComponent<UniquelyYoursProps> =
  () => {
    return (
      <View>
        <View style={styles.row}>
          <TitleText {...{text: 'Uniquely Yours'}} />
        </View>
        <HorizontalScrollView>
          {uniquelyYoursList.map(({title, img, subtitle}, key) => (
            <PostCard {...{key, img, title, subtitle}} />
          ))}
        </HorizontalScrollView>
      </View>
    );
  };
