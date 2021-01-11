import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

const ErrorMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.errorText}>Failed to Load Data</Text>
    </View>
  );
};

export default ErrorMessage;
