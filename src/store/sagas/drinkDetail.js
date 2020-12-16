import {call, put} from 'redux-saga/effects';
import api from '../../config/api';

import {Creators as DrinkDetailsActions} from '../ducks/drinkDetail';

export default function* findDrinkDetails(action) {
  try {
    const res = yield call(api.get, `lookup.php?i=${action.payload.idDrink}`);

    yield put(DrinkDetailsActions.findDrinkDetailSuccess(res.data.drinks[0]));
  } catch (error) {
    yield put(DrinkDetailsActions.findDrinkDetailFailure('Data not found'));
  }
}
