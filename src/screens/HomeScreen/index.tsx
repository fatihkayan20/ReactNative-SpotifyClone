import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Layout} from '../../components/Layout';

interface HomeScreenProps {}
const styles = StyleSheet.create({});

export const HomeScreen: React.FunctionComponent<HomeScreenProps> = () => {
  return (
    <Layout>
      <Text>HomeScreen</Text>
    </Layout>
  );
};
