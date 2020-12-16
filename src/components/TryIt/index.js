/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

import styles from './styles';

const TryIt = ({drink}) => {
  const navigation = useNavigation();

  function showIngredients() {
    const ingredients = [];

    for (let i = 1; i <= 15; i += 1) {
      if (drink[`strIngredient${i}`] !== null) {
        if (
          drink[`strMeasure${i}`] !== null &&
          drink[`strMeasure${i}`] !== ''
        ) {
          ingredients.push({
            id: i,
            text: `• ${drink[`strMeasure${i}`]} ${drink[`strIngredient${i}`]}`,
          });
        } else {
          ingredients.push({
            id: i,
            text: `• ${drink[`strIngredient${i}`]}`,
          });
        }
      }
    }

    return ingredients.map((each) => (
      <Text style={styles.item} key={each.id}>
        {each.text}
      </Text>
    ));
  }

  return (
    <View style={styles.container}>
      <>
        <Text style={styles.drinkit}>Drink It...</Text>
        <TouchableHighlight
          onPress={() =>
            navigation.navigate('DrinkRoutes', {
              screen: 'DrinkDetails',
              params: {drinkId: drink.idDrink},
            })
          }
          style={styles.card}
        >
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
              {showIngredients()}
            </View>
          </>
        </TouchableHighlight>
      </>
    </View>
  );
};

TryIt.propTypes = {
  drink: PropTypes.object.isRequired,
};

export default TryIt;
