import React from 'react';
import {FlatList, Text} from 'react-native';
import {IListProps} from '../../utils/interfaces';
import CardList from '../CardList';

const List = (props: IListProps) => {
  const {data} = props;

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <CardList property={item} />}
    />
  );
};

export default List;
