import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';

import styles from './styles';
import Category from '../../components/Category';
import Loading from '../../components/Loading';
import api from '../../config/api';

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  async function fetchCategories() {
    setLoading(true);
    try {
      const {data} = await api.get('./list.php?c=list');

      setCategories(data.drinks);
    } catch (error) {
      Alert.alert('Error', 'Error on fetch data');
    }
    setLoading(false);
  }

  return (
    <>
      {loading && <Loading />}
      <ScrollView style={styles.container}>
        {categories &&
          categories.map((category) => (
            <Category key={category.strCategory} category={category} />
          ))}
      </ScrollView>
    </>
  );
};

export default Categories;
