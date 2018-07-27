import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import Weather from '../global/components/Weather';
import COLORS from '../global/styles';

const styles = StyleSheet.create({
  dateTextStyle: {
    color: COLORS.offWhite,
    fontSize: 22,
  },
  locationTextStyle: {
    color: COLORS.offWhite,
    fontSize: 14,
  },
  headerViewStyle: {
    backgroundColor: COLORS.skyBlue,
    flexDirection: 'column',
    justifyContent: 'center',
    height: 240,
    padding: 50,
    paddingRight: 10,
  },
  dateLocationViewStyle: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

const CurrentWeatherHeader = (props) => {
  const {
    city,
    country,
    forecast,
    forecast: {
      label,
    },
  } = props;

  return (
    <View style={styles.headerViewStyle}>
      <View style={styles.dateLocationViewStyle}>
        <Text style={styles.dateTextStyle}>{label}</Text>
        <Text style={styles.locationTextStyle}>{city}, {country}</Text>
      </View>
      <Weather
        forecast={forecast}
        backgroundColor={COLORS.skyBlue}
        textColor={COLORS.offWhite}
      />
    </View>
  );
};

CurrentWeatherHeader.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  forecast: PropTypes.shape({
    label: PropTypes.string.isRequired,
    convertedMaxTemp: PropTypes.number.isRequired,
    convertedMinTemp: PropTypes.number.isRequired,
    weather: PropTypes.shape({
      icon: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default CurrentWeatherHeader;
