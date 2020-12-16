import {all, takeLatest} from 'redux-saga/effects';

import findFilters from './filters';
import findDrinks from './drinks';
import findRandomDrink from './randomDrink';
import findDrinkDetails from './drinkDetail';
import searchDrinks from './searchList';

import {Types as FilterTypes} from '../ducks/filters';
import {Types as DrinksTypes} from '../ducks/drinks';
import {Types as RandomDrinkTypes} from '../ducks/randomDrink';
import {Types as DrinkDetailTypes} from '../ducks/drinkDetail';
import {Types as SearchDrinksTypes} from '../ducks/searchList';

export default function* rootSaga() {
  yield all([takeLatest(FilterTypes.FIND_REQUEST, findFilters)]);
  yield all([takeLatest(DrinksTypes.FIND_REQUEST, findDrinks)]);
  yield all([takeLatest(RandomDrinkTypes.FIND_REQUEST, findRandomDrink)]);
  yield all([takeLatest(DrinkDetailTypes.FIND_REQUEST, findDrinkDetails)]);
  yield all([takeLatest(SearchDrinksTypes.FIND_REQUEST, searchDrinks)]);
}
