import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {useNavigation} from '@react-navigation/native';

import {ICardListProps} from '../../utils/interfaces';

import styles from './style';

const CardList = (props: ICardListProps) => {
  const {property} = props;
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Details', {title: property.name, id: property.id})
      }>
      <View>
        <Text style={styles.header}>{property.name}</Text>
        <Text style={styles.subHeader}>
          {`${
            property.species !== null ? property.species?.name : 'Human'
          } from ${property.homeworld.name}`}
        </Text>
      </View>
      <FontAwesomeIcon icon={faChevronRight} />
    </TouchableOpacity>
  );
};

export default CardList;
