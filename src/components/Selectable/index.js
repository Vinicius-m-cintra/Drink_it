import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Selectable({text, onSelect}) {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelect()}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

Selectable.propTypes = {
  text: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default Selectable;
