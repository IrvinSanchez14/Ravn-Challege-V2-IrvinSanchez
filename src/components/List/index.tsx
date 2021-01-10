import React from 'react';
import {FlatList} from 'react-native';
import {IListProps} from '../../utils/interfaces';
import CardList from '../CardList';

const List = (props: IListProps) => {
  const {data, refreshData} = props;

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <CardList property={item} />}
      onEndReached={() => refreshData()}
    />
  );
};

export default List;
