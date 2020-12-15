/* eslint-disable react/forbid-prop-types */
import React from 'react';
import {View, Text, TouchableHighlight, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import PropTypes from 'prop-types';

import styles from './styles';

const TryIt = ({drink}) => {
  const navigation = useNavigation();
  const [drinkObj] = drink.drinks;

  function showIngredients() {
    const ingredients = [];

    for (let i = 1; i <= 15; i += 1) {
      if (drinkObj[`strIngredient${i}`] !== null) {
        if (drinkObj[`strMeasure${i}`] !== null) {
          ingredients.push({
            id: i,
            text: `• ${drinkObj[`strMeasure${i}`]} ${
              drinkObj[`strIngredient${i}`]
            }`,
          });
        } else {
          ingredients.push({
            id: i,
            text: `• ${drinkObj[`strIngredient${i}`]}`,
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
              params: {drinkId: drinkObj.idDrink},
            })
          }
          style={styles.card}
        >
          <>
            <Image
              resizeMode="contain"
              style={styles.thumb}
              source={{
                uri: drinkObj.strDrinkThumb,
              }}
            />
            <View>
              <Text style={styles.title}>{drinkObj.strDrink}</Text>
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
