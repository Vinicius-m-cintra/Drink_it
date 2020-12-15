import React from 'react';
import {TouchableHighlight, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

import styles from './styles';

function Category({value, typeSearch}) {
  const navigation = useNavigation();
  function redirect() {
    navigation.push('Drinks', {value, typeSearch});
  }
  return (
    <TouchableHighlight onPress={() => redirect()} style={styles.container}>
      <Text style={styles.title}>{value}</Text>
    </TouchableHighlight>
  );
}

Category.propTypes = {
  value: PropTypes.string.isRequired,
  typeSearch: PropTypes.oneOf(['c', 'g', 'i', 'a']).isRequired,
};

export default Category;
