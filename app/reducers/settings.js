const initialSettingsState = {
  location: {
    city: 'Adelaide',
    country: 'AU',
  },
  temperature: {
    unit: 'Metric',
  },
};

// eslint-disable-next-line import/prefer-default-export
export function settings(state = initialSettingsState, action) {
  switch (action.type) {
    case 'select_location':
      return {
        ...state,
        location: {
          city: action.payload.city,
          country: action.payload.country,
        },
      };

    case 'select_temperature_unit':
      return {
        ...state,
        temperature: {
          unit: action.payload,
        },
      };

    default:
      return state;
  }
}
