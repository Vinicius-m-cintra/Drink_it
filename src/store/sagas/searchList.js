import {call, put} from 'redux-saga/effects';
import api from '../../config/api';

import {Creators as SearchDrinksActions} from '../ducks/searchList';

export default function* searchDrinks(action) {
  try {
    const res = yield call(api.get, `search.php?s=${action.payload.search}`);

    yield put(SearchDrinksActions.findDrinksSuccess(res.data.drinks));
  } catch (error) {
    yield put(SearchDrinksActions.findDrinksFailure('Data not found'));
  }
}
