import {combineReducers} from 'redux';

import filters from './filters';
import drinks from './drinks';
import randomDrink from './randomDrink';
import drinkDetail from './drinkDetail';
import searchList from './searchList';

export default combineReducers({
  filters,
  drinks,
  randomDrink,
  drinkDetail,
  searchList,
});
