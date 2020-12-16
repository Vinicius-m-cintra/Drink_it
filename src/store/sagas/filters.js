import {call, put} from 'redux-saga/effects';
import api from '../../config/api';

import {Creators as FilterActions} from '../ducks/filters';

export default function* findFilters(action) {
  try {
    const res = yield call(
      api.get,
      `./list.php?${action.payload.filterBy}=list`
    );

    yield put(FilterActions.findFiltersSuccess(res.data.drinks));
  } catch (error) {
    yield put(FilterActions.findFilterFailure('Data not found'));
  }
}
