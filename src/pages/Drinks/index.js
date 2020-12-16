/* eslint-disable react/forbid-prop-types */
import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import PropTypes from 'prop-types';
import {useSelector, useDispatch} from 'react-redux';

import Item from '../../components/Item';
import Loading from '../../components/Loading';
import styles from './styles';
import {Creators as actions} from '../../store/ducks/drinks';

const Drinks = ({route}) => {
  const dispatch = useDispatch();
  const drinks = useSelector((state) => state.drinks);
  const {value, typeSearch} = route.params;

  useEffect(() => {
    dispatch(actions.findDrinksRequest(typeSearch, value));
  }, []);

  return (
    <>
      {drinks.loading && <Loading />}
      <ScrollView style={styles.container}>
        {drinks.data &&
          drinks.data.length > 0 &&
          drinks.data.map((drink) => (
            <Item key={drink.idDrink} drink={drink} />
          ))}
      </ScrollView>
    </>
  );
};

Drinks.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Drinks;
