import React from 'react';
import {FlatList, Text, View} from 'react-native';

import List from '../../components/List';

import styles from './style';

const mockData = [
  {key: 'Devin'},
  {key: 'Dan'},
  {key: 'Dominic'},
  {key: 'Jackson'},
  {key: 'James'},
  {key: 'Joel'},
  {key: 'John'},
  {key: 'Jillian'},
  {key: 'Jimmy'},
  {key: 'Julie'},
];

const Home = () => {
  return (
    <View style={styles.container}>
      <List data={mockData} />
    </View>
  );
};

export default Home;
