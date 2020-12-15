import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';

import {getData} from '../../functions/storage';
import styles from './styles';
import Item from '../../components/Item';

const Favorites = ({navigation}) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchFavorites();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  function fetchFavorites() {
    getData().then((res) => {
      console.log(res);
      setFavorites(res);
    });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorites</Text>
      {favorites && favorites.length > 0 ? (
        <ScrollView style={styles.list}>
          {favorites &&
            favorites.length > 0 &&
            favorites.map((drink) => (
              <Item key={drink.idDrink} drink={drink} />
            ))}
        </ScrollView>
      ) : (
        <Text style={styles.empty}>Has No Favorite on your list...</Text>
      )}
    </View>
  );
};

export default Favorites;
