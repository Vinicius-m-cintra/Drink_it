import React, {useState, useEffect} from 'react';
import {ScrollView, Text, Alert, Image} from 'react-native';

import Loading from '../../components/Loading';

import api from '../../config/api';
import styles from './styles';
import {FlatList} from 'react-native-gesture-handler';

const DrinkDetails = ({route}) => {
  const {drinkId} = route.params;
  const [drink, setDrink] = useState({});
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchDrink();
  }, []);

  useEffect(() => {
    let i = 1;
    let ingredient;
    let tmpIngredients = [];
    do {
      let ingredient = drink[`strIngredient${i}`];
      i++;
      if (ingredient) tmpIngredients.push(ingredient);
    } while (ingredient !== null && ingredient !== undefined);

    console.log(tmpIngredients);
    setIngredients(tmpIngredients);
  }, [drink]);

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
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{drink.strDrink}</Text>
          <Image
            resizeMode="contain"
            source={{
              uri: drink.strDrinkThumb,
            }}
            style={styles.image}
          />
          <Text style={styles.title}>Ingredients</Text>
        </ScrollView>
      )}
    </>
  );
};

export default DrinkDetails;
