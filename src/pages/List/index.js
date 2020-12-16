import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import styles from './styles';

import ItemList from '../../components/ItemList';
import Loading from '../../components/Loading';
import DropDown from '../../components/DropDown';
import {Creators as actions} from '../../store/ducks/filters';

const Categories = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters);
  const [filterBy, setFilterBy] = useState('c');

  useEffect(() => {
    dispatch(actions.findFiltersRequest(filters, filterBy));
  }, [filterBy]);

  return (
    <View style={styles.container}>
      {filters.loading && <Loading />}
      <DropDown setFilterBy={setFilterBy} />
      {filters.error && (
        <Text style={styles.error}>
          Error on Fetch Data, Try to reload you app...
        </Text>
      )}
      <ScrollView style={styles.container}>
        {filters.data &&
          filters.data.map((value) => (
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
