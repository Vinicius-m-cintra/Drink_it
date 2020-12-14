import React, {useState, useEffect} from 'react';

import {Alert, View} from 'react-native';

import styles from './styles';

import TryIt from '../../components/TryIt';
import api from '../../config/api';
import Loading from '../../components/Loading';

function Home() {
  const [randomDrink, setRandomDrink] = useState({});
  const [loading, setLoading] = useState();

  useEffect(() => {
    fetchRandomDrink();
  }, []);

  async function fetchRandomDrink() {
    setLoading(true);
    try {
      const {data} = await api.get('/random.php');

      setRandomDrink(data);
    } catch (error) {
      Alert.alert('Error', 'An error occurred while fetching the data');
    }
    setLoading(false);
  }
  return (
    <View style={styles.container}>
      {loading && <Loading />}
      {randomDrink && randomDrink.drinks && <TryIt drink={randomDrink} />}
    </View>
  );
}

export default Home;
