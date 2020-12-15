/* eslint-disable react/forbid-prop-types */
import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import {getData} from '../../functions/storage';
import styles from './styles';
import Item from '../../components/Item';

const Favorites = ({navigation}) => {
  const [favorites, setFavorites] = useState([]);

  function fetchFavorites() {
    getData().then((res) => {
      setFavorites(res);
    });
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchFavorites();
    });

    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    fetchFavorites();
  }, []);

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

Favorites.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Favorites;
