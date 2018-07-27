import { fork } from 'redux-saga/effects';
import { watchRequestForecasts } from './ForecastSaga';

export default function* rootSaga() {
  yield fork(watchRequestForecasts);
}
