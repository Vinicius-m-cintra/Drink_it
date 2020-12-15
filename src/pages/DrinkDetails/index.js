/* eslint-disable react/forbid-prop-types */
import React, {useState} from 'react';
import {ScrollView, Text, Alert, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import PropTypes from 'prop-types';

import Loading from '../../components/Loading';
import api from '../../config/api';
import styles from './styles';
import colors from '../../variables/colors';
import {storeData, getData} from '../../functions/storage';

const DrinkDetails = ({route}) => {
  const {drinkId} = route.params;
  const [drink, setDrink] = useState({});
  const [loading, setLoading] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

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
  useFocusEffect(
    React.useCallback(() => {
      fetchDrink();
    }, [drinkId])
  );

  function showIngredients() {
    const ingredients = [];

    for (let i = 1; i <= 15; i += 1) {
      if (drink[`strIngredient${i}`] !== null) {
        if (drink[`strMeasure${i}`] !== null) {
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
      <Text style={styles.ingredient} key={each.id}>
        {each.text}
      </Text>
    ));
  }

  async function favorite() {
    const favorites = await getData();
    const index = favorites.map((each) => each.idDrink).indexOf(drink.idDrink);
    if (index === -1) {
      favorites.push(drink);
      await storeData(favorites);
      setIsFavorite(true);
    } else {
      favorites.splice(index);
      storeData(favorites);
      setIsFavorite(false);
    }
  }

  return (
    <>
      {loading && <Loading />}
      <ScrollView style={styles.container}>
        <Text style={styles.title}>{drink.strDrink}</Text>
        <View style={styles.containerBtn}>
          <Icon
            onPress={() => favorite()}
            color={colors.beige}
            size={24}
            name={isFavorite ? 'favorite' : 'favorite-border'}
          />
        </View>
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

DrinkDetails.propTypes = {
  route: PropTypes.object.isRequired,
};

export default DrinkDetails;
