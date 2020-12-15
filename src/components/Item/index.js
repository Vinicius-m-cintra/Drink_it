/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from 'react-native-fast-image';
import PropTypes from 'prop-types';

import styles from './styles';

function Item({drink}) {
  const navigation = useNavigation();
  function redirect() {
    navigation.navigate('DrinkRoutes', {
      screen: 'DrinkDetails',
      params: {drinkId: drink.idDrink},
    });
  }
  return (
    <TouchableHighlight onPress={() => redirect()} style={styles.container}>
      <View style={styles.flex}>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={{
            uri: drink.strDrinkThumb,
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.title}>{drink.strDrink}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

Item.propTypes = {
  drink: PropTypes.object.isRequired,
};

export default Item;
