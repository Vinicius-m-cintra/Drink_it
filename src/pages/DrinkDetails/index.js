import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Alert} from 'react-native';

import Loading from '../../components/Loading';

import api from '../../config/api';
import styles from './styles';
import FastImage from 'react-native-fast-image';

const DrinkDetails = ({route}) => {
  const {drinkId} = route.params;
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDrink();
  }, []);

  async function fetchDrink() {
    setLoading(true);
    try {
      const {data} = await api.get(`lookup.php?i=${drinkId}`);

      setDrink(data.drinks[0]);
    } catch (error) {
      Alert.alert('Error', 'Error on fetch data');
    }
    setLoading(false);
  }

  function showIngredients() {
    let ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (drink['strIngredient' + i] !== null) {
        if (drink['strMeasure' + i] !== null) {
          ingredients.push({
            id: i,
            text: `• ${drink['strMeasure' + i]} ${drink['strIngredient' + i]}`,
          });
        } else {
          ingredients.push({
            id: i,
            text: `• ${drink['strIngredient' + i]}`,
          });
        }
      }
    }

    return ingredients.map((each) => (
      <Text style={styles.ingredient} key={each.id}>
        {each.text}
      </Text>
    ));
  }
  return (
    <>
      {loading && <Loading />}
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{drink.strDrink}</Text>
        <FastImage
          resizeMode={FastImage.resizeMode.contain}
          source={{
            uri: drink.strDrinkThumb,
          }}
          style={styles.image}
        />
        <Text style={styles.alcoholic}>{drink.strAlcoholic}</Text>
        <Text style={styles.title}>Ingredients</Text>
        {drink.strIngredient1 && showIngredients()}
        <Text style={styles.title}>Preparation mode</Text>
        <Text style={styles.instructions}>{drink.strInstructions}</Text>
      </ScrollView>
    </>
  );
};

export default DrinkDetails;
