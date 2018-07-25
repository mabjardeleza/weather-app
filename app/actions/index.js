export const forecastList = {
  request: forecastIndex => ({ type: 'request_forecast', payload: forecastIndex }),
  success: forecastListData => ({ type: 'success_forecast', payload: forecastListData }),
  error: error => ({
    type: 'error_forecast',
    payload: error,
    error: true,
  }),
};

export const selection = {
  set: forecastKey => ({ type: 'select_forecast', payload: forecastKey }),
};
