import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {HorizontalScrollView} from '../../../components/HorizontalScrollView';
import {TitleText} from '../../../components/TitleText';
import {forYouList} from '../../../utility/data-uri';
import {PostCard} from './PostCard';

interface MadeForYouProps {}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export const MadeForYou: React.FunctionComponent<MadeForYouProps> = () => {
  return (
    <View>
      <View style={styles.row}>
        <TitleText {...{text: 'Made For Fatih Kayan'}} />
      </View>
      <HorizontalScrollView>
        {forYouList.map(({title, img, subtitle}, key) => (
          <PostCard {...{key, img, title, subtitle}} />
        ))}
      </HorizontalScrollView>
    </View>
  );
};
