import React, {useEffect} from 'react';
import {View, Text, TouchableHighlight, Image, Alert} from 'react-native';

import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';

const ingredients = [
  {id: 1, ingredient: 'Absolut Citron'},
  {id: 2, ingredient: 'Orange juice'},
  {id: 3, ingredient: 'Triple sec'},
  {id: 4, ingredient: 'Ginger ale'},
];

const TryIt = (props) => {
  const drink = props.drink.drinks[0];
  const renderIngredients = ({item}) => (
    <Text style={styles.item}>{item.ingredient}</Text>
  );

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.drinkit}>Drink It...</Text>
        <TouchableHighlight
          onPress={() => Alert.alert('teste', 'teste')}
          style={styles.card}>
          <>
            <Image
              resizeMode="contain"
              style={styles.thumb}
              source={{
                uri: drink.strDrinkThumb,
              }}
            />
            <View>
              <Text style={styles.title}>{drink.strDrink}</Text>
              <FlatList
                data={ingredients}
                renderItem={renderIngredients}
                keyExtractor={(ingredient) => ingredient.id}
              />
            </View>
          </>
        </TouchableHighlight>
      </>
    </View>
  );
};

export default TryIt;
