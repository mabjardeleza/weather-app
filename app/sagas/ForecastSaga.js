import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { camelizeKeys } from 'humps';

import { FORECAST, forecastList, settings } from '../actions';

function* requestForecastData(action) {
  try {
    const {
      payload: {
        city,
        country,
      },
    } = action;
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&country=${country}&key=dde8d8f055f74bc39f253757d643b379`;
    const response = yield call(fetch, url, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const jsonResponse = yield response.json();
    const forecasts = camelizeKeys(jsonResponse);
    yield put(forecastList.success(forecasts));
    yield put(settings.setLocation(forecasts.cityName, forecasts.countryCode));
  } catch (error) {
    yield put(forecastList.error(error));
  }
}

// eslint-disable-next-line import/prefer-default-export
export function* watchRequestForecasts() {
  yield takeLatest(FORECAST.REQUEST, requestForecastData);
}
