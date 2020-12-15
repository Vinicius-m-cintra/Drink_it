import React, {useState, useEffect} from 'react';
import {ScrollView, View, Alert} from 'react-native';

import styles from './styles';

import ItemList from '../../components/ItemList';
import Loading from '../../components/Loading';
import DropDown from '../../components/DropDown';
import api from '../../config/api';

const Categories = () => {
  const [filterBy, setFilterBy] = useState('c');
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchCategories() {
    setLoading(true);
    try {
      const {data} = await api.get(`./list.php?${filterBy}=list`);

      setCategories(data.drinks);
    } catch (error) {
      Alert.alert('Error', 'Error on fetch data');
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchCategories();
  }, [filterBy]);

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      <DropDown setFilterBy={setFilterBy} />
      <ScrollView style={styles.container}>
        {categories &&
          categories.map((value) => (
            <ItemList
              typeSearch={filterBy}
              key={Object.values(value)[0]}
              value={Object.values(value)[0]}
            />
          ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
