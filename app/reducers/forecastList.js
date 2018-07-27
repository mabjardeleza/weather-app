const initialForecastState = {
  data: {
    cityName: '',
    countryCode: '',
    data: [{
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
  },
  loading: false,
  error: false,
};

// eslint-disable-next-line import/prefer-default-export
export function forecastList(state = initialForecastState, action) {
  switch (action.type) {
    case 'request_forecast':
      return {
        ...state,
        loading: true,
        error: false,
      };

    case 'success_forecast':
      return {
        data: action.payload,
        loading: false,
        error: false,
      };

    case 'error_forecast':
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
}
