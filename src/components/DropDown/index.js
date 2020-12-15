import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import Selectable from '../Selectable';
import colors from '../../variables/colors';
import styles from './styles';

const DropDown = ({setFilterBy}) => {
  const [isOpen, setIsOpen] = useState(false);

  function choose(value) {
    setIsOpen(false);
    setFilterBy(value);
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#fff', marginLeft: 5}}>Filter by:</Text>
        <Icon
          style={styles.icon}
          onPress={() => setIsOpen(!isOpen)}
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={24}
          color={colors.beige}
        />
      </View>
      {isOpen && (
        <View style={{padding: 5}}>
          <Selectable onSelect={() => choose('c')} text="Categories" />
          <Selectable onSelect={() => choose('g')} text="Glasses" />
          <Selectable onSelect={() => choose('i')} text="Ingredients" />
          <Selectable onSelect={() => choose('a')} text="Alcoholic" />
        </View>
      )}
    </View>
  );
};

DropDown.propTypes = {
  setFilterBy: PropTypes.func.isRequired,
};

export default DropDown;
