import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';

import styles from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CheckBox = ({isChecked, changeValue, text}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => changeValue()}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Icon
          size={18}
          color="#fff"
          name={isChecked ? 'check-box' : 'check-box-outline-blank'}
        />
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CheckBox;
