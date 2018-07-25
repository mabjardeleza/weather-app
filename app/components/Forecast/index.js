import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import CurrentWeatherHeader from '../CurrentWeatherHeader';
import ForecastList from './List';

const Forecast = (props) => {
  const {
    country,
    city,
    currentDay,
    forecasts,
    navigateToDetailsPage,
  } = props;

  return (
    <ScrollView>
      <CurrentWeatherHeader
        country={country}
        city={city}
        forecast={currentDay}
      />
      <ForecastList
        details={forecasts}
        navigateToDetailsPage={navigateToDetailsPage}
      />
    </ScrollView>
  );
};

Forecast.propTypes = {
  country: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  currentDay: PropTypes.shape({
    label: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  forecasts: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    windSpd: PropTypes.number.isRequired,
    windCdir: PropTypes.string.isRequired,
    pres: PropTypes.number.isRequired,
    rh: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
  navigateToDetailsPage: PropTypes.func.isRequired,
};

export default Forecast;
