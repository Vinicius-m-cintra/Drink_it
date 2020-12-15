import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import styles from './styles';

const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#f4f4f4" />
    </View>
  );
};

export default Loading;
