const initialForecastState = {
  forecasts: [{
    label: '',
    day: 0,
    weekday: '',
    month: '',
    maxTemp: 0,
    minTemp: 0,
    windSpd: 0,
    windCdir: 'NA',
    pres: 0,
    rh: 0,
    weather: {
      icon: '',
      description: '',
    },
  }],
};

// eslint-disable-next-line import/prefer-default-export
export function forecastList(state = initialForecastState, action) {
  switch (action.type) {
    case 'success_forecast':
      return {
        forecasts: action.payload,
      };

    default:
      return state;
  }
}
