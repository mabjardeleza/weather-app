import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ForecastDay from './Day';

const ForecastList = ({ details }) => (
  <View>
    {details
      .map(day => (
        <ForecastDay
          key={day.label}
          details={day}
        />
      ))
    }
  </View>
);

ForecastList.propTypes = {
  details: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    maxTemp: PropTypes.number.isRequired,
    minTemp: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  })).isRequired,
};
export default ForecastList;
