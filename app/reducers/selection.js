const initialForecastKeyState = {
  currentForecast: -1,
};

// eslint-disable-next-line import/prefer-default-export
export function forecastSelection(state = initialForecastKeyState, action) {
  switch (action.type) {
    case 'select_forecast':
      return {
        currentForecastKey: action.payload,
      };

    default:
      return state;
  }
}
