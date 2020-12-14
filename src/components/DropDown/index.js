import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CheckBox from '../CheckBox';
import colors from '../../variables/colors';
import styles from './styles';

const DropDown = ({functions, states}) => {
  const {sBIngredient, sBGlass} = states;
  const {setSBGlass, setSBIngredient} = functions;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{color: '#fff', marginLeft: 5}}>Filters</Text>
        <Icon
          style={styles.icon}
          onPress={() => setIsOpen(!isOpen)}
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
          size={20}
          color={colors.beige}
        />
      </View>
      {isOpen && (
        <View style={{padding: 5}}>
          <Text style={{color: '#fff'}}>Search By:</Text>
          <CheckBox
            isChecked={sBIngredient}
            changeValue={() => setSBIngredient(!sBIngredient)}
            text="Ingredient"
          />
          <CheckBox
            isChecked={sBGlass}
            changeValue={() => setSBGlass(!sBGlass)}
            text="Glass"
          />
        </View>
      )}
    </View>
  );
};

export default DropDown;
