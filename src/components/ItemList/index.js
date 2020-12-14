import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

function Category({value, typeSearch}) {
  const navigation = useNavigation();
  function redirect() {
    navigation.push('Drinks', {value: value, typeSearch });
  }
  return (
    <TouchableHighlight onPress={() => redirect()} style={styles.container}>
      <Text style={styles.title}>{value}</Text>
    </TouchableHighlight>
  );
}

export default Category;
