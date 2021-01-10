import React from 'react';
import {Text} from 'react-native';

import {ITableDetailProps} from '../../utils/interfaces';
import styles from './style';

const TableDetail = (props: ITableDetailProps) => {
  const {label, value} = props;

  return (
    <>
      <Text style={styles.textLabel}>{label}</Text>
      <Text style={styles.textValue}>{value}</Text>
    </>
  );
};

export default TableDetail;
