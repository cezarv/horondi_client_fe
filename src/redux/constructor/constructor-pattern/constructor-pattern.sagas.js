import { call, put, takeEvery } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { getConstructorPatternById } from './constructor-pattern.operations';
import { GET_CONSTRUCTOR_PATTERN } from './constructor-pattern.types';
import { setConstructorPattern } from './constructor-pattern.actions';
import { setModelLoading } from '../constructor-model/constructor-model.actions';
import { setError } from '../../error/error.actions';

export function* handleConstructorPatternLoad({ payload: id }) {
  try {
    const pattern = yield call(getConstructorPatternById, id);
    yield put(setConstructorPattern(pattern));
  } catch (e) {
    console.log(e);
    yield call(handleError, e);
  }
}

export function* handleError(e) {
  yield put(setModelLoading(true));
  yield put(setError(e.message));
  yield put(push('/error-page'));
}

export default function* constructorPatternSaga() {
  yield takeEvery(GET_CONSTRUCTOR_PATTERN, handleConstructorPatternLoad);
}
