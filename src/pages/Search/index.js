import React, {useState} from 'react';
import {View, Alert, ScrollView, Keyboard} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';
import Item from '../../components/Item';

import styles from './styles';
import {Creators as actions} from '../../store/ducks/searchList';

const Search = () => {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.searchList);
  const [search, setSearch] = useState('');

  async function fetchDrinks() {
    if (!search || search === '') {
      Alert.alert('Ops', 'Please, fill the search field!');
      return;
    }

    Keyboard.dismiss();

    dispatch(actions.findDrinksRequest(search));
  }

  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={(e) => setSearch(e)}
        onSubmit={() => fetchDrinks()}
      />
      <View style={styles.container}>
        {drinks.loading && <Loading />}
        <ScrollView style={styles.container}>
          {drinks.data &&
            drinks.data.length > 0 &&
            drinks.data.map((drink) => (
              <Item key={drink.idDrink} drink={drink} />
            ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
