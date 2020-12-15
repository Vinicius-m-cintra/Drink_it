/* eslint-disable react/forbid-prop-types */
import React, {useEffect, useState} from 'react';
import {ScrollView, Alert} from 'react-native';
import PropTypes from 'prop-types';

import Item from '../../components/Item';
import Loading from '../../components/Loading';
import api from '../../config/api';
import styles from './styles';

const Drinks = ({route}) => {
  const [drinks, setDrinks] = useState();
  const [loading, setLoading] = useState(false);
  const {value, typeSearch} = route.params;

  async function fetchDrinks() {
    setLoading(true);
    try {
      const {data} = await api.get(`/filter.php?${typeSearch}=${value}`);

      setDrinks(data.drinks);
    } catch (error) {
      Alert.alert('Error', 'Error on fetch data');
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchDrinks();
  }, []);

  return (
    <>
      {loading && <Loading />}
      <ScrollView style={styles.container}>
        {drinks &&
          drinks.length > 0 &&
          drinks.map((drink) => <Item key={drink.idDrink} drink={drink} />)}
      </ScrollView>
    </>
  );
};

Drinks.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Drinks;
