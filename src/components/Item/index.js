import React from 'react';
import {TouchableHighlight, View, Image, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

function Item({drink}) {
  const navigation = useNavigation();
  function redirect() {
    navigation.push('DrinkDetails', {drinkId: drink.idDrink});
  }
  return (
    <TouchableHighlight onPress={() => redirect()} style={styles.container}>
      <View style={styles.flex}>
        <Image
          resizeMode="contain"
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

export default Item;
