/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import {ScrollView, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useFocusEffect} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import Loading from '../../components/Loading';
import styles from './styles';
import colors from '../../variables/colors';
import {storeData, getData} from '../../functions/storage';
import {Creators as actions} from '../../store/ducks/drinkDetail';

const DrinkDetails = ({route}) => {
  const dispatch = useDispatch();
  const {drinkId} = route.params;
  const drink = useSelector((state) => state.drinkDetail);
  const [isFavorite, setIsFavorite] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(actions.findDrinkDetailRequest(drinkId));
    }, [drinkId])
  );

  async function verifyFavorite() {
    const favorites = await getData();
    if (
      favorites.map((each) => each.idDrink).indexOf(drink.data.idDrink) !== -1
    ) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  }

  useEffect(() => {
    verifyFavorite();
  }, [drink]);

  function showIngredients() {
    const ingredients = [];

    for (let i = 1; i <= 15; i += 1) {
      if (drink.data[`strIngredient${i}`] !== null) {
        if (drink.data[`strMeasure${i}`] !== null) {
          ingredients.push({
            id: i,
            text: `• ${drink.data[`strMeasure${i}`]} ${
              drink.data[`strIngredient${i}`]
            }`,
          });
        } else {
          ingredients.push({
            id: i,
            text: `• ${drink.data[`strIngredient${i}`]}`,
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
    const index = favorites
      .map((each) => each.idDrink)
      .indexOf(drink.data.idDrink);
    if (index === -1) {
      favorites.push(drink.data);
      await storeData(favorites);
      setIsFavorite(true);
    } else {
      favorites.splice(index, 1);
      await storeData(favorites);
      setIsFavorite(false);
    }
  }

  return (
    <View style={styles.container}>
      {drink.loading && <Loading />}
      {drink.data.strDrink && (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{drink.data.strDrink}</Text>
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
              uri: drink.data.strDrinkThumb,
            }}
            style={styles.image}
          />
          <Text style={styles.alcoholic}>{drink.data.strAlcoholic}</Text>
          <Text style={styles.title}>Ingredients</Text>
          {drink.data.strIngredient1 && showIngredients()}
          <Text style={styles.title}>Preparation mode</Text>
          <Text style={styles.instructions}>{drink.data.strInstructions}</Text>
        </ScrollView>
      )}
    </View>
  );
};

DrinkDetails.propTypes = {
  route: PropTypes.object.isRequired,
};

export default DrinkDetails;
