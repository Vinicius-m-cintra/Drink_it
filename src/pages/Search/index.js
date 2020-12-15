import React, {useState} from 'react';
import {View, Alert, ScrollView, Keyboard} from 'react-native';

import SearchBar from '../../components/SearchBar';
import Loading from '../../components/Loading';
import Item from '../../components/Item';

import styles from './styles';
import api from '../../config/api';

const Search = () => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [drinks, setDrinks] = useState([]);

  async function fetchDrinks() {
    if (!search || search === '') {
      Alert.alert('Ops', 'Please, fill the search field!');
      return;
    }

    Keyboard.dismiss();

    setLoading(true);
    try {
      const {data} = await api.get(`search.php?s=${search}`);

      const res = await api.get(`filter.php?i=${search}`);
      const dashDrinks = [];
      if (res.data.drinks) {
        res.data.drinks.forEach((each) => {
          if (
            data.drinks
              .map((dashDrink) => dashDrink.idDrink)
              .indexOf(each.idDrink) === -1
          ) {
            dashDrinks.push(each);
          }
          setDrinks([...data.drinks, ...dashDrinks]);
        });
      } else {
        setDrinks(data.drinks);
      }

      setLoading(false);
    } catch (error) {
      Alert.alert('ops', 'Error on fetch data');
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <SearchBar
        onChangeText={(e) => setSearch(e)}
        onSubmit={() => fetchDrinks()}
      />
      <View style={styles.container}>
        {loading && <Loading />}
        <ScrollView style={styles.container}>
          {drinks &&
            drinks.length > 0 &&
            drinks.map((drink) => <Item key={drink.idDrink} drink={drink} />)}
        </ScrollView>
      </View>
    </View>
  );
};

export default Search;
