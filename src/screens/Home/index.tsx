import {useQuery} from '@apollo/client';
import React, {useState} from 'react';
import {View} from 'react-native';

import List from '../../components/List';
import Loader from '../../components/Loader';
import {GET_PEOPLE} from '../../utils/graphql';

import styles from './style';

const Home = () => {
  const {loading, error, data} = useQuery(GET_PEOPLE);

  console.log('loading', loading);
  console.log('error', error);
  console.log('data', data);

  return (
    <View style={styles.container}>
      {loading && <Loader />}
      {!loading && <List data={data.allPeople.people} />}
    </View>
  );
};

export default Home;
