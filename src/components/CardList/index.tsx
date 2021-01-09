import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';

import {ICardListProps} from '../../utils/interfaces';

import styles from './style';

const CardList = (props: ICardListProps) => {
  const {header, subHeader} = props;

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => console.log('press function')}>
      <View>
        <Text style={styles.header}>{header}</Text>
        <Text style={styles.subHeader}>{subHeader}</Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} />
    </TouchableOpacity>
  );
};

export default CardList;
