import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

function Category({category}) {
  const navigation = useNavigation();
  function redirect() {
    navigation.push('Drinks', {category: category.strCategory});
  }
  return (
    <TouchableHighlight onPress={() => redirect()} style={styles.container}>
      <Text style={styles.title}>{category.strCategory}</Text>
    </TouchableHighlight>
  );
}

export default Category;
