import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {VerticalScrollView} from '../../components/VerticalScrollView';
import {TitleText} from '../../components/TitleText';
import {SearchInput} from './components/SearchInput';
import {browseAllList} from '../../utility/data-uri';
import {BrowseCard} from './components/BrowseCard';

interface SearchScreenProps {}
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: -5,
  },
});

export const SearchScreen: React.FunctionComponent<SearchScreenProps> = () => {
  return (
    <VerticalScrollView>
      <TitleText text={'Search'} />
      <SearchInput />
      <View style={styles.row}>
        {browseAllList.map((item, key) => (
          <BrowseCard {...{key, ...item}} />
        ))}
      </View>
    </VerticalScrollView>
  );
};
