import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';
import TryIt from '../../components/TryIt';
import Loading from '../../components/Loading';
import {Creators as actions} from '../../store/ducks/randomDrink';

function Home() {
  const dispatch = useDispatch();
  const randomDrink = useSelector((state) => state.randomDrink);

  useEffect(() => {
    dispatch(actions.findRandomDrinkRequest());
  }, []);

  return (
    <View style={styles.container}>
      {randomDrink.loading && <Loading />}
      {randomDrink.data && <TryIt drink={randomDrink.data} />}
      <Text style={styles.welcome}>
        Welcome to your best experience with drinks. Perfect for drink lovers
        and for people who want to venture out.
      </Text>
    </View>
  );
}

export default Home;
