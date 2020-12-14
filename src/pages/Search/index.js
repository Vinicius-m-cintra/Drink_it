import React, {useState} from 'react';
import {View, Alert, ScrollView, Keyboard} from 'react-native';

import SearchBar from '../../components/SearchBar';
import DropDown from '../../components/DropDown';
import Loading from '../../components/Loading';
import Item from '../../components/Item';

import styles from './styles';
import api from '../../config/api';

const Search = () => {
  const [sBIngredient, setSBIngredient] = useState(true);
  const [sBGlass, setSBGlass] = useState(true);
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
      setDrinks(data.drinks);

      if (sBIngredient) {
        const res = await api.get(`filter.php?i=${search}`);
        if (res.data.drinks) setDrinks([...drinks, ...res.data.drinks]);
      }
      if (sBGlass) {
        const res = await api.get(`filter.php?g=${search}`);
        console.log(res.data);
        if (res.data.drinks) setDrinks([...drinks, ...res.data.drinks]);
      }

      // setDrinks(drinks.filter((each, i) => drinks.indexOf(each) === i));
      setLoading(false);
    } catch (error) {
      Alert.alert('ops', 'Error on fetch data');
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <SearchBar
        onChangeText={(e) => setSearch(e)}
        onSubmit={() => fetchDrinks()}
      />
      <DropDown
        states={{sBGlass, sBIngredient}}
        functions={{setSBIngredient, setSBGlass}}
      />
      <ScrollView style={styles.container}>
        {drinks &&
          drinks.length > 0 &&
          drinks.map((drink) => <Item key={drink.idDrink} drink={drink} />)}
      </ScrollView>
    </View>
  );
};

export default Search;
