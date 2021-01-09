import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import styles from './style';

const Loader = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator color="#DADADA" />
      <Text style={styles.textLoad}>Loading</Text>
    </View>
  );
};

export default Loader;
