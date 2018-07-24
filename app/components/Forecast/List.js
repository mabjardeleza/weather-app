import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import ForecastListItem from './ListItem';

const ForecastList = ({ details, navigateToDetailsPage }) => (
  <View>
    {details
      .map((day, index) => (
        <ForecastListItem
          key={day.label}
          details={day}
          navigateToDetailsPage={() => navigateToDetailsPage(index)}
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
  navigateToDetailsPage: PropTypes.func.isRequired,
};
export default ForecastList;
