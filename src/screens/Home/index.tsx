import {useQuery} from '@apollo/client';
import React from 'react';
import {View} from 'react-native';
import ErrorMessage from '../../components/ErrorMessage';

import List from '../../components/List';
import Loader from '../../components/Loader';
import {GET_PEOPLE} from '../../utils/graphql';
import {IBodyAPI} from '../../utils/interfaces';

import styles from './style';

const Home = () => {
  const {loading, error, data, fetchMore} = useQuery(GET_PEOPLE, {
    variables: {
      time: null,
    },
  });

  const getRefreshData = () => {
    const {allPeople} = data;

    fetchMore({
      variables: {time: allPeople.pageInfo.endCursor},
      updateQuery: (prev: IBodyAPI, {fetchMoreResult}) => {
        if (
          !fetchMoreResult ||
          allPeople.people.length === allPeople.totalCount
        ) {
          return prev;
        }
        fetchMoreResult.allPeople.people = [
          ...prev.allPeople.people,
          ...fetchMoreResult.allPeople.people,
        ];
        return fetchMoreResult;
      },
    });
  };

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <View style={styles.container}>
      {loading && <Loader />}
      {!loading && (
        <List
          data={data.allPeople.people}
          refreshData={() => getRefreshData()}
        />
      )}
    </View>
  );
};

export default Home;
