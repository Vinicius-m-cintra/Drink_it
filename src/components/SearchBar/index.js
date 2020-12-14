import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';
import colors from '../../variables/colors';

const SearchBar = ({onChangeText, onSubmit}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        placeholderTextColor="#fff"
        onChangeText={(e) => onChangeText(e)}
        onSubmitEditing={() => onSubmit()}
      />
      <TouchableOpacity style={styles.button} onPress={() => onSubmit()}>
        <Icon name="search" size={20} color={colors.gray} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
