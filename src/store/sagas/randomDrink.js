import {call, put} from 'redux-saga/effects';
import api from '../../config/api';

import {Creators as RandomDrinkActions} from '../ducks/randomDrink';

export default function* findRandomDrink() {
  try {
    const res = yield call(api.get, '/random.php');

    yield put(RandomDrinkActions.findRandomDrinkSuccess(res.data.drinks[0]));
  } catch (error) {
    yield put(RandomDrinkActions.findRandomDrinkFailure('Data not found'));
  }
}
