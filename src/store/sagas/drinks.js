import {call, put} from 'redux-saga/effects';
import api from '../../config/api';

import {Creators as DrinksActions} from '../ducks/drinks';

export default function* findDrinks(action) {
  try {
    const res = yield call(
      api.get,
      `/filter.php?${action.payload.filterBy}=${action.payload.value}`
    );

    yield put(DrinksActions.findDrinksSuccess(res.data.drinks));
  } catch (error) {
    yield put(DrinksActions.findDrinksFailure('Data not found'));
  }
}
