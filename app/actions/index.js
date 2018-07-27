export const FORECAST = {
  REQUEST: 'request_forecast',
  SUCCESS: 'success_forecast',
  ERROR: 'error_forecast',
};

export const forecastList = {
  request: (city, country) => ({ type: FORECAST.REQUEST, payload: { city, country } }),
  success: forecastListData => ({ type: FORECAST.SUCCESS, payload: forecastListData }),
  error: error => ({
    type: FORECAST.ERROR,
    payload: error,
    error: true,
  }),
};

export const forecastSelection = {
  set: forecastKey => ({ type: 'select_forecast', payload: forecastKey }),
};

export const settings = {
  setLocation: (city, country) => ({ type: 'select_location', payload: { city, country } }),
  setTemperature: unit => ({ type: 'select_temperature_unit', payload: unit }),
};
